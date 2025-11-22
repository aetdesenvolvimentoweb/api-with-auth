export interface BaseSanitizerProtocol<T> {
  sanitize(input: T): T;
}
