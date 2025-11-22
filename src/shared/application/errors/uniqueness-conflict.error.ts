import { AppError } from "./app.error";

export class UniquenessConflictError extends AppError {
  constructor(fieldName: string, fieldValue: string) {
    super(
      `O valor: ${fieldValue} já está em uso para o campo: ${fieldName}.`,
      409,
    );
    this.name = "UniquenessConflictError";
  }
}
