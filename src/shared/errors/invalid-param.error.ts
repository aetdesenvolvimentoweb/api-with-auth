import { AppError } from "./app.error";

export class InvalidParamError extends AppError {
  constructor(paramName: string, reason?: string) {
    const message = reason
      ? `Parâmetro inválido: ${paramName}. ${reason}.`
      : `Parâmetro inválido: ${paramName}.`;
    super(message, 422);
    this.name = "InvalidParamError";
  }
}
