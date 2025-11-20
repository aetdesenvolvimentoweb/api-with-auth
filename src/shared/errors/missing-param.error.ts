import { AppError } from "./app.error";

export class MissingParamError extends AppError {
  constructor(paramName: string) {
    super(`Parâmetro obrigatório não preenchido: ${paramName}.`, 422);
    this.name = "MissingParamError";
  }
}
