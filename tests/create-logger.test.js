import winston from "winston";

test("create new logger", () => {
  const logger = winston.createLogger({
    transports: [new winston.transports.Console({})],
  });

  logger.log({
    level: "info", // wajib ada
    message: "Hello World",
  });
});
