/* eslint-disable no-unused-vars */
import { User } from "next-auth";
import { JWT } from "next-auth/jwt";
import { SystemRole } from ".";

type UserId = string;

declare module "next-auth/jwt" {
  interface JWT {
    id: UserId;
  }
}

declare module "next-auth" {
  interface Session {
    user: User & {
      id: UserId;
      email: string;
      role: SystemRole;
    };
  }
}
