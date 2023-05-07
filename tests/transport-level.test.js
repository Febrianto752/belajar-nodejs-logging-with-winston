import winston from "winston";

test("logging transport level", () => {
  const logger = winston.createLogger({
    level: "info",
    transports: [
      new winston.transports.Console({
        level: "silly",
      }),
      new winston.transports.File({
        level: "warn",
        filename: __dirname + "/../logs/application.log",
      }),
    ],
  });

  logger.warn("you must be creative");
  logger.info("Hello world");
  logger.silly("just for testing");
});
