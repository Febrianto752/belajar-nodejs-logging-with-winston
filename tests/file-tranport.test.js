import winston from "winston";

test("logging with file transport", () => {
  const logger = winston.createLogger({
    level: "info",
    transports: [
      new winston.transports.Console({}),
      new winston.transports.File({
        filename: __dirname + "/../logs/application.log",
      }),
    ],
  });

  logger.info("Hello world");
  logger.warn("You must be creative");
});
