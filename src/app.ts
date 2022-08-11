import express from "express";
import dotenv from "dotenv";
import { Logger } from 'tslog';

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();
const log = new Logger();

app.listen(port, () => {
  log.info(`Server started on port ${port}`);
});
