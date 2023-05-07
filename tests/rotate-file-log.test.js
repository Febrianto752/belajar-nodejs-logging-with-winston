import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

test("logging with daily rotate file", () => {
  const logger = winston.createLogger({
    level: "info",
    transports: [
      new DailyRotateFile({
        filename: `${__dirname}/../logs/app-%DATE%.log`,
        zippedArchive: true,
        maxSize: "1m", // 1mb
        maxFiles: "14d", // will be deleted after 14 day
      }),
    ],
  });

  for (let i = 0; i < 1000000; i++) {
    logger.info(`log ke ${i}`);
  }
});
