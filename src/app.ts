import express from 'express';
import type { Express } from 'express';
import dotenv from 'dotenv';
import { Logger } from 'tslog';
import graphqlRoute from './routes/graphql.route';

dotenv.config();

const port = process.env.PORT || 3000;
const log: Logger = new Logger();

const app: Express = express();

app.use('/graphql', graphqlRoute);

app.listen(port, () => {
  log.info(`Server started on port ${port}`);
});
