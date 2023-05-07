import winston from "winston";

test("level winston", () => {
  const logger = winston.createLogger({
    level: "silly",
    transports: [new winston.transports.Console({})],
  });

  // logger.log({ level: "error", message: "Error message" });
  // logger.log({ level: "warn", message: "warn message" });
  // logger.log({ level: "info", message: "info message" });
  // logger.log({ level: "http", message: "http message" });
  // logger.log({ level: "verbose", message: "verbose message" });
  // logger.log({ level: "debug", message: "debug message" });
  // logger.log({ level: "silly", message: "silly message" });

  logger.error("Error message");
});
