import { EmailSanitizer } from "../email.sanitizer";

describe("EmailSanitizer", () => {
  let sut: EmailSanitizer;

  beforeEach(() => {
    sut = new EmailSanitizer();
  });

  it("should trim whitespace from email", () => {
    expect(sut.sanitize("  test@email.com  ")).toBe("test@email.com");
  });

  it("should convert email to lowercase", () => {
    expect(sut.sanitize("Test@EMAIL.COM")).toBe("test@email.com");
  });

  it("should remove internal spaces", () => {
    expect(sut.sanitize("test @ email . com")).toBe("test@email.com");
  });

  it("should remove control characters and null bytes", () => {
    expect(sut.sanitize("test\x00@\x1Femail.com")).toBe("test@email.com");
  });

  it("should remove HTML tags characters (XSS prevention)", () => {
    expect(sut.sanitize("<script>test@email.com</script>")).toBe(
      "scripttest@email.com/script",
    );
  });

  it("should remove SQL injection characters", () => {
    expect(sut.sanitize("test'@email.com")).toBe("test@email.com");
    expect(sut.sanitize('test"@email.com')).toBe("test@email.com");
    expect(sut.sanitize("test;@email.com")).toBe("test@email.com");
    expect(sut.sanitize("test\\@email.com")).toBe("test@email.com");
    expect(sut.sanitize("test`@email.com")).toBe("test@email.com");
  });

  it("should remove path traversal sequences", () => {
    expect(sut.sanitize("test..@email.com")).toBe("test@email.com");
    expect(sut.sanitize("../test@email.com")).toBe("/test@email.com");
  });

  it("should remove shell command injection characters", () => {
    expect(sut.sanitize("test|@email.com")).toBe("test@email.com");
    expect(sut.sanitize("test$@email.com")).toBe("test@email.com");
    expect(sut.sanitize("test&@email.com")).toBe("test@email.com");
    expect(sut.sanitize("test()@email.com")).toBe("test@email.com");
    expect(sut.sanitize("test{}@email.com")).toBe("test@email.com");
    expect(sut.sanitize("test[]@email.com")).toBe("test@email.com");
    expect(sut.sanitize("test!@email.com")).toBe("test@email.com");
    expect(sut.sanitize("test#@email.com")).toBe("test@email.com");
    expect(sut.sanitize("test*@email.com")).toBe("test@email.com");
    expect(sut.sanitize("test?@email.com")).toBe("test@email.com");
    expect(sut.sanitize("test~@email.com")).toBe("test@email.com");
    expect(sut.sanitize("test^@email.com")).toBe("test@email.com");
  });

  it("should preserve valid email characters", () => {
    expect(sut.sanitize("valid.email+tag@domain.com")).toBe(
      "valid.email+tag@domain.com",
    );
  });

  it("should handle combined sanitization scenarios", () => {
    expect(sut.sanitize("  TEST<script>'@EMAIL.COM  ")).toBe(
      "testscript@email.com",
    );
  });
});
