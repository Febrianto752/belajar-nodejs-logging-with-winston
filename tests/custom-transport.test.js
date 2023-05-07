import winston from "winston";
import { MyTransport } from "../src/my-transport";

test("create custom transport", () => {
  const logger = winston.createLogger({
    level: "info",
    transports: [new MyTransport({})],
  });

  logger.info("Hello World");
});
