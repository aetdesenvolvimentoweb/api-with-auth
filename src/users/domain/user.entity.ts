import { UserRole } from "./user-role.enum";

export type User = {
  id: string;
  name: string;
  email: string;
  phone: number;
  birthDate: Date;
  passwordHash: string;
  role: UserRole;
  isActive: boolean;
  createdAt: Date;
};
