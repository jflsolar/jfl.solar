import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "@/lib/db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { validatePassword } from "./utils";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/sign-in",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials) {
          return Promise.resolve(null);
        }
        const user = await db.user.findFirst({
          where: {
            email: credentials.email,
          },
        });

        if (
          user &&
          validatePassword(credentials.password, user.hashedPassword, user.salt)
        ) {
          return Promise.resolve(user);
        } else {
          return Promise.resolve(null);
        }
      },
    }),
  ],
  adapter: PrismaAdapter(db),
  callbacks: {
    async jwt({ token, user }) {
      console.log("token", token);
      console.log("user", user);
      if (user && "role" in user) {
        token.id = user.id;
        token.role = user.role;
        token.email = user.email;
      }
      return token;
    },
    async session({ token, session }) {
      session.user.id = token.id;
      session.user.role = token.role as string;
      return session;
    },
  },
};
