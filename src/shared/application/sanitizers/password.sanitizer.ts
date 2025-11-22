import { StringSanitizerProtocol } from "./protocols/string.sanitizer.protocol";

export class PasswordSanitizer implements StringSanitizerProtocol {
  sanitize(value: string): string {
    return (
      value
        .trim()
        // Remove caracteres de controle e null bytes
        // eslint-disable-next-line no-control-regex
        .replace(/[\x00-\x1F\x7F]/g, "")
    );
  }
}
