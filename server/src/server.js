const { ApolloServer } = require('apollo-server');
const schema = require('./schema');

// start the server
const server = new ApolloServer({ schema });
server.listen({port: 5000})
    .then((serverInfo) => console.log(`Server running at ${serverInfo.url}`));