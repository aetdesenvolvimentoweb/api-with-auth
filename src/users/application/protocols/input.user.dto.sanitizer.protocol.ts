import { BaseSanitizerProtocol } from "src/shared/application/sanitizers/protocols";
import { InputUserDTO } from "src/users/domain";

export interface InputUserDTOSanitizerProtocol
  extends BaseSanitizerProtocol<InputUserDTO> {
  sanitize: (input: InputUserDTO) => InputUserDTO;
}
