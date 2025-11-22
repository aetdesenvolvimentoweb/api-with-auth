import { StringSanitizerProtocol } from "./protocols/string.sanitizer.protocol";

export class EmailSanitizer implements StringSanitizerProtocol {
  sanitize(value: string): string {
    return (
      value
        .trim()
        // E-mails são case-insensitive
        .toLowerCase()
        // Remove todos os espaços
        .replace(/\s+/g, "")
        // Remove caracteres de controle e null bytes
        // eslint-disable-next-line no-control-regex
        .replace(/[\x00-\x1F\x7F]/g, "")
        // XSS: remove tags e caracteres HTML
        .replace(/[<>]/g, "")
        // SQL Injection: remove caracteres perigosos (mantém @ e . para e-mails)
        .replace(/['";\\`]/g, "")
        // Path Traversal: remove sequências de diretório
        .replace(/\.\./g, "")
        // Command Injection: remove caracteres de shell (mantém @ e . para e-mails)
        .replace(/[|$&(){}[\]!#*?~^]/g, "")
    );
  }
}
