import { AppError } from "../app.error";
import { InvalidParamError } from "../invalid-param.error";

describe("InvalidParamError", () => {
  it("should create an error with correct message and status code 422", () => {
    const error = new InvalidParamError("email");

    expect(error.message).toBe("Parâmetro inválido: email.");
    expect(error.statusCode).toBe(422);
    expect(error.name).toBe("InvalidParamError");
  });

  it("should create an error with reason when provided", () => {
    const error = new InvalidParamError("email", "formato inválido");

    expect(error.message).toBe("Parâmetro inválido: email. formato inválido.");
    expect(error.statusCode).toBe(422);
    expect(error.name).toBe("InvalidParamError");
  });

  it("should be an instance of AppError and Error", () => {
    const error = new InvalidParamError("password");

    expect(error).toBeInstanceOf(Error);
    expect(error).toBeInstanceOf(AppError);
    expect(error).toBeInstanceOf(InvalidParamError);
  });

  it("should have a stack trace", () => {
    const error = new InvalidParamError("name");

    expect(error.stack).toBeDefined();
  });
});
