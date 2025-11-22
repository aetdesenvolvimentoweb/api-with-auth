import { AppError } from "../app.error";

describe("AppError", () => {
  it("should create an error with message and default status code 400", () => {
    const error = new AppError("Test error");

    expect(error.message).toBe("Test error");
    expect(error.statusCode).toBe(400);
    expect(error.name).toBe("AppError");
  });

  it("should create an error with custom status code", () => {
    const error = new AppError("Not found", 404);

    expect(error.message).toBe("Not found");
    expect(error.statusCode).toBe(404);
  });

  it("should be an instance of Error", () => {
    const error = new AppError("Test error");

    expect(error).toBeInstanceOf(Error);
    expect(error).toBeInstanceOf(AppError);
  });

  it("should have a stack trace", () => {
    const error = new AppError("Test error");

    expect(error.stack).toBeDefined();
  });

  it("should work when Error.captureStackTrace is not available", () => {
    const originalCaptureStackTrace = Error.captureStackTrace;
    // @ts-expect-error - testing when captureStackTrace is not available
    Error.captureStackTrace = undefined;

    const error = new AppError("Test error");

    expect(error.message).toBe("Test error");
    expect(error.name).toBe("AppError");

    Error.captureStackTrace = originalCaptureStackTrace;
  });
});
