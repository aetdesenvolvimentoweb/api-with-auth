import { BaseCreateService } from "../../../shared/services";
import { InputUserDTO, UserRepository } from "../../../users/domain";

export class CreateUserService extends BaseCreateService<InputUserDTO> {
  constructor(userRepository: UserRepository) {
    super({ repository: userRepository });
  }
}
