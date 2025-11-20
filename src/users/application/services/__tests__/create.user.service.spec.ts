import { InputUserDTO } from "src/users/domain";

import { createUserRepositoryMock } from "../../../../../__mocks__";
import { CreateUserService } from "../create.user.service";

describe("CreateUserService", () => {
  it("should call userRepository.create with sanitized data", async () => {
    const userRepositoryMock = createUserRepositoryMock();
    const sut = new CreateUserService(userRepositoryMock);
    const inputData: InputUserDTO = {
      name: "  John Doe  ",
      email: "  JOHN@EXAMPLE.COM  ",
      password: "  secure123  ",
      phone: 11999999999,
      birthDate: new Date("1990-01-01"),
    };

    await sut.create(inputData);

    expect(userRepositoryMock.create).toHaveBeenCalledWith({
      name: "John Doe",
      email: "john@example.com",
      password: "secure123",
      phone: 11999999999,
      birthDate: new Date("1990-01-01"),
    });
  });
});
