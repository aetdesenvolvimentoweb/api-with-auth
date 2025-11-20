export interface BaseUpdateUsecase<InputType> {
  update: (id: string, input: InputType) => Promise<void>;
}
