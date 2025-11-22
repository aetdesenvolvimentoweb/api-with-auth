import { AppError } from "../app.error";
import { MissingParamError } from "../missing-param.error";

describe("MissingParamError", () => {
  it("should create an error with correct message and status code 422", () => {
    const error = new MissingParamError("email");

    expect(error.message).toBe("Parâmetro obrigatório não preenchido: email.");
    expect(error.statusCode).toBe(422);
    expect(error.name).toBe("MissingParamError");
  });

  it("should be an instance of AppError and Error", () => {
    const error = new MissingParamError("password");

    expect(error).toBeInstanceOf(Error);
    expect(error).toBeInstanceOf(AppError);
    expect(error).toBeInstanceOf(MissingParamError);
  });

  it("should have a stack trace", () => {
    const error = new MissingParamError("name");

    expect(error.stack).toBeDefined();
  });
});
