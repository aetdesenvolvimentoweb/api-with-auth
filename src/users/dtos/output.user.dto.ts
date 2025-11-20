import { User } from "../user.entity";

export type OutputUserDTO = Omit<User, "passwordHash">;
