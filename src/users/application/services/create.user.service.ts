import { BaseCreateUsecase } from "src/shared/usecases";
import { InputUserDTO, UserRepository } from "src/users/domain";

interface CreateUserServiceDependencies {
  userRepository: UserRepository;
  // Add other dependencies if needed
}

export class CreateUserService implements BaseCreateUsecase<InputUserDTO> {
  constructor(private readonly dependencies: CreateUserServiceDependencies) {}

  create = async (data: InputUserDTO): Promise<void> => {
    // sanitize data
    // validate data
    this.dependencies.userRepository.create(data);
  };
}
