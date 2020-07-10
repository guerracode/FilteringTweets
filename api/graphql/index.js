const express = require('express');
const config = require('../../config/index');
const { makeExecutableSchema } = require('graphql-tools');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const { readFileSync } = require('fs');
const { join } = require('path');
const resolvers = require('./resolvers');

const app = express();
const isDev = config.node_env !== 'production';

const typeDefs = readFileSync(join(__dirname, './', 'schema.graphql'), 'utf-8');

const schema = makeExecutableSchema({ typeDefs, resolvers });

app.use(cors());

app.use(
  '/api',
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: isDev,
  })
);

const server = app.listen(config.api.port, () => {
  console.log(
    `Server is listening at http://localhost:${server.address().port}`
  );
});
