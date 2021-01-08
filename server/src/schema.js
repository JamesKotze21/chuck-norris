const { gql, makeExecutableSchema } = require('apollo-server');
const axios = require('axios');

const typeDefs = gql`
    type Joke {
        id: String
        value: String
        categories: [String]
    }

    type Query {
        anyJoke(category: String): Joke
        categories: [String]
        joke(id: String!): Joke
    }
`;

const resolvers = {
    Query: {
        joke: (_, { id }) => {
            return axios.get("https://api.chucknorris.io/jokes/" + id).then(({ data }) => data);
        },
        anyJoke: (_, { category }) => {           
            var queryParam = category ? `?category=${category}` : "";
            return axios.get("https://api.chucknorris.io/jokes/random" + queryParam).then(({ data }) => data);
        },
        categories: () => {
            return axios.get("https://api.chucknorris.io/jokes/categories").then(({ data }) => data);
        }
    },
};

module.exports = makeExecutableSchema({
    typeDefs,
    resolvers
});;