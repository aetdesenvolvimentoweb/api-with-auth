import {
  EmailSanitizer,
  NameSanitizer,
  PasswordSanitizer,
} from "../../shared/application/sanitizers";
import { InputUserDTO } from "../application/dtos";
import { InputUserDTOSanitizerProtocol } from "../domain/protocols";

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
