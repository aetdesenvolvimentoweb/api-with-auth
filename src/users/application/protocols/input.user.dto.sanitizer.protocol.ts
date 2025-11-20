import { InputUserDTO } from "src/users/domain";

export interface InputUserDTOSanitizerProtocol {
  sanitize: (input: InputUserDTO) => InputUserDTO;
}
