import { PORT } from "./config";
import app from "./config/app";
import logger from "./config/logger";

const startServer = async () => {
  try {
    app.listen(PORT, () => {
      logger.info(`App is listening on PORT NO ${PORT}`);
    });
  } catch (error) {
    if (error instanceof Error) logger.error(error.message);
    setTimeout(() => {
      process.exit(1);
    }, 1000);
  }
};

startServer();
