/// <reference types="cypress"/>

import { QUERY_POSTS } from "@graphql/graphql.query";
import client from "@lib/apollo";

it("Fetches data from GRAPHCMS", () => {
  // make a GraphQL query using the app's client
  // https://www.apollographql.com/docs/react/data/queries/
  const query = QUERY_POSTS;

  // use https://on.cypress.io/wrap to let the Cypress test
  // wait for the promise returned by the "client.query" to resolve
  cy.wrap(
    client.query({
      query,
      // it is important to AVOID any caching here
      // and fetch the current server data
      fetchPolicy: "no-cache",
    }),
  );
});
