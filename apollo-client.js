import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const link = new HttpLink({
    uri: 'https://graphqlpokemon.favware.tech/v7'
});

const client = new ApolloClient({
    // Provide required constructor fields
    link: link,
    cache: new InMemoryCache(),

    // Provide some optional constructor fields
    name: 'graphql-pokemon-client',
    version: '1.0',
    queryDeduplication: false,
    defaultOptions: {
        watchQuery: {
        fetchPolicy: 'cache-and-network'
        }
    }
});

export default client;