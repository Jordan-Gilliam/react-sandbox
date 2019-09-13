import React from "react";
import { render } from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import Currency from "./currency";

const client = new ApolloClient({
  uri: "https://w5xlvm3vzz.lp.gql.zone/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <Currency />
  </ApolloProvider>
);

render(<App />, document.getElementById("root"));
