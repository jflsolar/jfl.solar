export interface CreateUserParams {
  name: string;
  email: string;
  password: string;
  picture?: string;
}

export interface ResetPasswordParams {
  email: string;
  newPassword: string;
}
