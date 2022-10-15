import { config } from 'dotenv-defaults';
import express from 'express';

// init dotenv with defaults
config();

const app = express();
const port = process.env.APP_PORT;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
