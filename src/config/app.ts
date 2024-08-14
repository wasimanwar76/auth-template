import express, { NextFunction, Request, Response } from "express";
import logger from "./logger";
import { HttpError } from "http-errors";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello, Welcome to auth service</h1>");
});

app.use((error: HttpError, req: Request, res: Response, next: NextFunction) => {
  logger.error(error);
  const statusCode = error.statusCode || 500;
  res.status(statusCode).json({
    error: [
      {
        type: error.name,
        message: error.message,
        path: "",
        location: "",
      },
    ],
  });
});
export default app;
