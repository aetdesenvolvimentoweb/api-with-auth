import { UserRepository } from "src/users/domain";

export const createUserRepositoryMock = (): jest.Mocked<UserRepository> => ({
  create: jest.fn(),
  delete: jest.fn(),
  findById: jest.fn(),
  getAll: jest.fn(),
  update: jest.fn(),
});
