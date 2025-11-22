import { UserRepository } from "src/users/domain/protocols";

export const createUserRepositoryMock = (): jest.Mocked<UserRepository> => ({
  create: jest.fn(),
  delete: jest.fn(),
  findById: jest.fn(),
  getAll: jest.fn(),
  update: jest.fn(),
});
