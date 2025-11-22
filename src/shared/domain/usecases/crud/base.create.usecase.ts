export interface BaseCreateUsecase<InputType> {
  create: (input: InputType) => Promise<void>;
}
