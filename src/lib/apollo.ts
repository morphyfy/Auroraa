import { ApolloClient, InMemoryCache } from "@apollo/client";
import { CMS_API } from "@constants/pathApi";

const client = new ApolloClient({
  uri: process.env.NEXT_API_PUBLIC_URL || CMS_API,
  cache: new InMemoryCache(),
});

export default client;
