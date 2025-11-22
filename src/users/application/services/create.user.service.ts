import { BaseCreateService } from "../../../shared/application/services";
import { InputUserDTO } from "../../../users/application/dtos";
import { UserRepository } from "../../../users/domain/protocols";
import { InputUserDTOSanitizer } from "../input.user.dto.sanitizer";

export class CreateUserService extends BaseCreateService<InputUserDTO> {
  constructor(userRepository: UserRepository) {
    super({
      repository: userRepository,
      sanitizer: new InputUserDTOSanitizer(),
    });
  }
}
