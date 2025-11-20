import { BaseCreateUsecase } from "src/shared/usecases";

export interface BaseCreateServiceDependencies<InputType> {
  repository: BaseCreateUsecase<InputType>;
}

export abstract class BaseCreateService<InputType>
  implements BaseCreateUsecase<InputType>
{
  constructor(
    protected readonly dependencies: BaseCreateServiceDependencies<InputType>,
  ) {}

  create = async (data: InputType): Promise<void> => {
    await this.dependencies.repository.create(data);
  };
}
