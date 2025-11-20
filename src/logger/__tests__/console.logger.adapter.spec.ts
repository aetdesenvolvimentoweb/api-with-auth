import { ConsoleLoggerAdapter } from "../console.logger.adapter";

describe("ConsoleLoggerAdapter", () => {
  let logger: ConsoleLoggerAdapter;

  beforeEach(() => {
    logger = new ConsoleLoggerAdapter();
    jest.spyOn(console, "info").mockImplementation();
    jest.spyOn(console, "warn").mockImplementation();
    jest.spyOn(console, "error").mockImplementation();
    jest.spyOn(console, "debug").mockImplementation();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe("info", () => {
    it("should log info message with meta", () => {
      const meta = { userId: "123" };
      logger.info("test message", meta);
      expect(console.info).toHaveBeenCalledWith("INFO: test message", meta);
    });

    it("should log info message without meta", () => {
      logger.info("test message");
      expect(console.info).toHaveBeenCalledWith("INFO: test message", "");
    });
  });

  describe("warn", () => {
    it("should log warn message with meta", () => {
      const meta = { warning: "disk full" };
      logger.warn("warning message", meta);
      expect(console.warn).toHaveBeenCalledWith("WARN: warning message", meta);
    });

    it("should log warn message without meta", () => {
      logger.warn("warning message");
      expect(console.warn).toHaveBeenCalledWith("WARN: warning message", "");
    });
  });

  describe("error", () => {
    it("should log error message with meta", () => {
      const meta = { error: "connection failed" };
      logger.error("error message", meta);
      expect(console.error).toHaveBeenCalledWith("ERROR: error message", meta);
    });

    it("should log error message without meta", () => {
      logger.error("error message");
      expect(console.error).toHaveBeenCalledWith("ERROR: error message", "");
    });
  });

  describe("debug", () => {
    it("should log debug message with meta", () => {
      const meta = { data: "debug info" };
      logger.debug?.("debug message", meta);
      expect(console.debug).toHaveBeenCalledWith("DEBUG: debug message", meta);
    });

    it("should log debug message without meta", () => {
      logger.debug?.("debug message");
      expect(console.debug).toHaveBeenCalledWith("DEBUG: debug message", "");
    });
  });
});
