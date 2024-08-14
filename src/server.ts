import { PORT } from "./config";
import app from "./config/app";

const startServer = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`App is listening on PORT NO ${PORT}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

startServer();
