export interface BaseFindByIdUsecase<OutputType> {
  findById: (id: string) => Promise<OutputType | null>;
}
