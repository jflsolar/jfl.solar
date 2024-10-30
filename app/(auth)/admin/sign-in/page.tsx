import { UserAuthForm } from "@/components/Auth/user-auth-form";
import Image from "next/image";
import Link from "next/link";

export default function SignIn() {
  return (
    <main className="mx-auto flex w-full flex-col justify-center space-y-6 rounded-xl bg-white p-10 shadow-2xl sm:w-[350px]">
      <div className="flex flex-col items-center gap-2">
        <Link href="/" className="relative flex items-center px-2">
          <Image
            src="/logo.png"
            width={200}
            height={60}
            loading="lazy"
            alt="jfl logo"
            className="flex max-sm:w-[150px] max-[400px]:hidden"
          />
          <Image
            src="/logo-circle.png"
            width={60}
            height={60}
            loading="lazy"
            alt="jfl logo"
            className="hidden max-[400px]:flex"
          />
        </Link>
      </div>

      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
        <p className="text-sm">
          Enter your email and password to sign in to your account
        </p>
      </div>
      <UserAuthForm />
    </main>
  );
}
