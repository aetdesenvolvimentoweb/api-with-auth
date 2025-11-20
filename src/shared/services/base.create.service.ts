import { BaseSanitizerProtocol } from "src/shared/sanitizers/protocols";
import { BaseCreateUsecase } from "src/shared/usecases";

export interface BaseCreateServiceDependencies<InputType> {
  repository: BaseCreateUsecase<InputType>;
  sanitizer: BaseSanitizerProtocol<InputType>;
}

export abstract class BaseCreateService<InputType>
  implements BaseCreateUsecase<InputType>
{
  constructor(
    protected readonly dependencies: BaseCreateServiceDependencies<InputType>,
  ) {}

  create = async (data: InputType): Promise<void> => {
    const sanitizedData = this.dependencies.sanitizer.sanitize(data);
    await this.dependencies.repository.create(sanitizedData);
  };
}
