import { User } from "src/users/domain/user.entity";

export type OutputUserDTO = Omit<User, "passwordHash">;
