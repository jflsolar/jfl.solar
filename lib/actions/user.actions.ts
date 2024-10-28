"use server";

import { hashPassword2 } from "../hash-pass";
import { CreateUserParams, ResetPasswordParams } from "./shared.type";

import { db } from "@/lib/db";

export async function createUser(userData: CreateUserParams) {
  const [hashedPassword, salt] = hashPassword2(userData.password);
  const newUser = await db.user.create({
    data: { ...userData, hashedPassword, salt, role: "user" },
  });

  return newUser;
}

export async function resetPassword(userData: ResetPasswordParams) {
  const { email, newPassword } = userData;
  try {
    const [hashedPassword, salt] = hashPassword2(newPassword);
    await db.user.update({
      where: {
        email,
      },
      data: { hashedPassword, salt },
    });
    return true;
  } catch (error: any) {
    return { error: error.message };
  }
}
