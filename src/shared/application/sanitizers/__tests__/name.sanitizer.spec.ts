import { NameSanitizer } from "../name.sanitizer";

describe("NameSanitizer", () => {
  let sut: NameSanitizer;

  beforeEach(() => {
    sut = new NameSanitizer();
  });

  it("should trim whitespace from name", () => {
    expect(sut.sanitize("  João Silva  ")).toBe("João Silva");
  });

  it("should normalize multiple spaces to single space", () => {
    expect(sut.sanitize("João    Silva")).toBe("João Silva");
  });

  it("should remove control characters and null bytes", () => {
    expect(sut.sanitize("João\x00\x1FSilva")).toBe("JoãoSilva");
  });

  it("should remove HTML tags characters (XSS prevention)", () => {
    expect(sut.sanitize("<script>João</script>")).toBe("scriptJoão/script");
  });

  it("should remove SQL injection characters but preserve apostrophe", () => {
    expect(sut.sanitize('João"Silva')).toBe("JoãoSilva");
    expect(sut.sanitize("João;Silva")).toBe("JoãoSilva");
    expect(sut.sanitize("João\\Silva")).toBe("JoãoSilva");
    expect(sut.sanitize("João`Silva")).toBe("JoãoSilva");
  });

  it("should preserve apostrophe for names like D'Abadia", () => {
    expect(sut.sanitize("D'Abadia")).toBe("D'Abadia");
    expect(sut.sanitize("O'Connor")).toBe("O'Connor");
  });

  it("should remove path traversal sequences", () => {
    expect(sut.sanitize("João..Silva")).toBe("JoãoSilva");
    expect(sut.sanitize("../João")).toBe("/João");
  });

  it("should remove shell command injection characters", () => {
    expect(sut.sanitize("João|Silva")).toBe("JoãoSilva");
    expect(sut.sanitize("João$Silva")).toBe("JoãoSilva");
    expect(sut.sanitize("João&Silva")).toBe("JoãoSilva");
    expect(sut.sanitize("João()Silva")).toBe("JoãoSilva");
    expect(sut.sanitize("João{}Silva")).toBe("JoãoSilva");
    expect(sut.sanitize("João[]Silva")).toBe("JoãoSilva");
    expect(sut.sanitize("João!Silva")).toBe("JoãoSilva");
    expect(sut.sanitize("João#Silva")).toBe("JoãoSilva");
    expect(sut.sanitize("João*Silva")).toBe("JoãoSilva");
    expect(sut.sanitize("João?Silva")).toBe("JoãoSilva");
    expect(sut.sanitize("João~Silva")).toBe("JoãoSilva");
    expect(sut.sanitize("João^Silva")).toBe("JoãoSilva");
  });

  it("should preserve valid name characters", () => {
    expect(sut.sanitize("María José García-López")).toBe(
      "María José García-López",
    );
  });

  it("should handle combined sanitization scenarios", () => {
    expect(sut.sanitize("  João<script>  D'Abadia  ")).toBe(
      "Joãoscript D'Abadia",
    );
  });
});
