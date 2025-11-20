export type User = {
  id: string;
  name: string;
  email: string;
  phone: number;
  birthDate: Date;
  passwordHash: string;
  role: "Administrador" | "Colaborador" | "Usuário";
  isActive: boolean;
  createdAt: Date;
};
