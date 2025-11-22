export interface BaseDeleteUsecase {
  delete: (id: string) => Promise<void>;
}
