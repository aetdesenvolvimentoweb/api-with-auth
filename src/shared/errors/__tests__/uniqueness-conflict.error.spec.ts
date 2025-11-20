import { AppError } from "../app.error";
import { UniquenessConflictError } from "../uniqueness-conflict.error";

describe("UniquenessConflictError", () => {
  it("should create an error with correct message and status code 409", () => {
    const error = new UniquenessConflictError("email", "test@example.com");

    expect(error.message).toBe(
      "O valor: test@example.com já está em uso para o campo: email.",
    );
    expect(error.statusCode).toBe(409);
    expect(error.name).toBe("UniquenessConflictError");
  });

  it("should be an instance of AppError and Error", () => {
    const error = new UniquenessConflictError("username", "john_doe");

    expect(error).toBeInstanceOf(Error);
    expect(error).toBeInstanceOf(AppError);
    expect(error).toBeInstanceOf(UniquenessConflictError);
  });

  it("should have a stack trace", () => {
    const error = new UniquenessConflictError("cpf", "12345678900");

    expect(error.stack).toBeDefined();
  });
});
