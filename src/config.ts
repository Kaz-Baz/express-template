import { config } from 'dotenv';

config({
  path: `${__dirname}/../.env`,
});

// eslint-disable-next-line import/prefer-default-export
export const PORT = Number(process.env.PORT);
