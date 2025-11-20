import { BaseCreateService } from "../../../shared/services";
import { InputUserDTO, UserRepository } from "../../../users/domain";
import { InputUserDTOSanitizer } from "../input.user.dto.sanitizer";

export class CreateUserService extends BaseCreateService<InputUserDTO> {
  constructor(userRepository: UserRepository) {
    super({
      repository: userRepository,
      sanitizer: new InputUserDTOSanitizer(),
    });
  }
}
