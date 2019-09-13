import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

export const GET_EXCHANGE_RATES_QUERY = gql`
  {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

export default () => (
  <Query query={GET_EXCHANGE_RATES_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.rates.map(({ currency, rate }) => (
        <div key={currency}>
          <p>{`${currency}: ${rate}`}</p>
        </div>
      ));
    }}
  </Query>
);
