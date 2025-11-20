export interface BaseGetAllUsecase<OutputType> {
  getAll: () => Promise<OutputType[]>;
}
