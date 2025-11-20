import { PasswordSanitizer } from "../password.sanitizer";

describe("PasswordSanitizer", () => {
  let sut: PasswordSanitizer;

  beforeEach(() => {
    sut = new PasswordSanitizer();
  });

  it("should trim whitespace from password", () => {
    expect(sut.sanitize("  password123  ")).toBe("password123");
  });

  it("should remove control characters", () => {
    expect(sut.sanitize("pass\x00word")).toBe("password");
    expect(sut.sanitize("pass\x1Fword")).toBe("password");
    expect(sut.sanitize("pass\x7Fword")).toBe("password");
  });

  it("should remove null bytes", () => {
    expect(sut.sanitize("pass\x00\x00word")).toBe("password");
  });

  it("should preserve special characters allowed in passwords", () => {
    expect(sut.sanitize("P@ssw0rd!#$%^&*()")).toBe("P@ssw0rd!#$%^&*()");
  });

  it("should preserve spaces in the middle of password", () => {
    expect(sut.sanitize("  pass word  ")).toBe("pass word");
  });

  it("should handle combined sanitization scenarios", () => {
    expect(sut.sanitize("  \x00Pass\x1Fword123!  ")).toBe("Password123!");
  });

  it("should preserve unicode characters", () => {
    expect(sut.sanitize("senhaçãoé123")).toBe("senhaçãoé123");
  });

  it("should return empty string when only control characters", () => {
    expect(sut.sanitize("\x00\x1F\x7F")).toBe("");
  });

  it("should handle empty string", () => {
    expect(sut.sanitize("")).toBe("");
  });
});
