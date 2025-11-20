import { User } from "../user.entity";

export type InputUserDTO = Omit<
  User,
  "id" | "role" | "isActive" | "createdAt" | "passwordHash"
> & { password: string };
