import {
  EmailSanitizer,
  NameSanitizer,
  PasswordSanitizer,
} from "../../shared/sanitizers";

import { InputUserDTO } from "../domain";
import { InputUserDTOSanitizerProtocol } from "./protocols/input.user.dto.sanitizer.protocol";

export class InputUserDTOSanitizer implements InputUserDTOSanitizerProtocol {
  sanitize(input: InputUserDTO): InputUserDTO {
    const nameSanitizer = new NameSanitizer();
    const emailSanitizer = new EmailSanitizer();
    const passwordSanitizer = new PasswordSanitizer();

    return {
      ...input,
      name: nameSanitizer.sanitize(input.name),
      email: emailSanitizer.sanitize(input.email),
      password: passwordSanitizer.sanitize(input.password),
    };
  }
}
