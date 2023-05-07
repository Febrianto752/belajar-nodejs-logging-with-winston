import winston from "winston";

const callAsync = () => {
  return Promise.reject("reject example");
};

const logger = winston.createLogger({
  level: "info",
  // handleRejections: true,
  transports: [
    new winston.transports.File({
      // handleExceptions: true,
      handleRejections: true,
      filename: "logs/reject.log",
    }),
  ],
});

callAsync().catch((res) => console.log(res));
