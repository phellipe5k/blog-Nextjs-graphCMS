import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/ckzq8mmhq5v0s01xke8edfp4j/master',
    cache: new InMemoryCache()
})

export default client;