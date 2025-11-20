import { StringSanitizerProtocol } from "./string.sanitizer.protocol";

export class NameSanitizer implements StringSanitizerProtocol {
  sanitize(value: string): string {
    return (
      value
        .trim()
        // Normaliza espaços múltiplos
        .replace(/\s+/g, " ")
        // Remove caracteres de controle e null bytes
        // eslint-disable-next-line no-control-regex
        .replace(/[\x00-\x1F\x7F]/g, "")
        // XSS: remove tags e caracteres HTML
        .replace(/[<>]/g, "")
        // SQL Injection: remove caracteres perigosos (exceto apóstrofe para nomes como D'Abadia)
        .replace(/[";\\`]/g, "")
        // Path Traversal: remove sequências de diretório
        .replace(/\.\./g, "")
        // Command Injection: remove caracteres de shell
        .replace(/[|$&(){}[\]!#*?~^]/g, "")
    );
  }
}
