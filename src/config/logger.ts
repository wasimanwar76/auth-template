import winston from "winston";
import { NODE_ENV } from ".";

const logger = winston.createLogger({
  level: "debug",
  defaultMeta: {
    serviceName: "auth-service",
  },
  transports: [
    new winston.transports.File({
      dirname: "logs",
      filename: "combined.logs",
      level: "info",
      silent: false,
    }),

    new winston.transports.File({
      dirname: "logs",
      filename: "error.logs",
      level: "error",
      silent: NODE_ENV === "test",
    }),
    new winston.transports.Console({
      level: "info",
      format: winston.format.json(),
    }),
  ],
});

export default logger;
