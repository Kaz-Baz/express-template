import * as bodyParser from 'body-parser';

import App from './Types/app';
import loggerMiddleware from './middlewares/log';
import { PORT } from './config';
import errorMiddleware from './middlewares/error';
import * as specs from './swaggerOptions.json';

const app = new App({
  port: PORT,
  controllers: [],
  middlewares: [
    bodyParser.json(),
    bodyParser.urlencoded({ extended: false }),
    loggerMiddleware,
  ],
  errorHandler: errorMiddleware,
  specs,
});

app.listen();
