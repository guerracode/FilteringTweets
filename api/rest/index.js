const express = require('express');
const config = require('../../config/index');
const tweetsRouter = require('./tweets');

const app = express();

app.use('/api', tweetsRouter);

const server = app.listen(config.api.port, () => {
  console.log(
    `Server is listening at http://localhost:${server.address().port}`
  );
});
