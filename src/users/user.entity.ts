export type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  birthDate: Date;
  passwordHash: string;
  role: "Administrador" | "Colaborador" | "Usuário";
  isActive: boolean;
  createdAt: Date;
};
