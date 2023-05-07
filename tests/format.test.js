import winston from "winston";

test("logging with format", () => {
  const logger = winston.createLogger({
    // format: winston.format.json(), // output : {level: "...", message: "..."}
    // format: winston.format.simple(), // output : <level> : <message>
    format: winston.format.logstash(), // output : {"@fields":{"level":"info"},"@message":"Hello world"}
    transports: [new winston.transports.Console({})],
  });

  logger.info("Hello world");
});

test("logging with custom format", () => {
  const logger = winston.createLogger({
    format: winston.format.printf((info) => {
      return `${new Date()} : ${info.level} : ${info.message}`;
    }),
    transports: [new winston.transports.Console({})],
  });

  logger.info("Hello world");
});

test("logging with combine format", () => {
  const logger = winston.createLogger({
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.ms(),
      winston.format.json()
    ),
    transports: [new winston.transports.Console({})],
  });

  logger.info("Hello world");
});
