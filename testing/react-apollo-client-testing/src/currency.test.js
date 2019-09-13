import React from "react";
import { MockedProvider } from "react-apollo/test-utils";
import renderer from "react-test-renderer";
import wait from "waait";

import Currency, { GET_EXCHANGE_RATES_QUERY } from "./currency";

it("should render without error", () => {
  renderer.create(
    <MockedProvider mocks={[]}>
      <Currency />
    </MockedProvider>
  );
});

it("should render loading state initially", () => {
  const component = renderer.create(
    <MockedProvider mocks={[]}>
      <Currency />
    </MockedProvider>
  );
  const tree = component.toJSON();
  expect(tree.children).toContain("Loading...");
});

it("should render currency conversions", async () => {
  const currencyMock = {
    request: { query: GET_EXCHANGE_RATES_QUERY },
    result: { data: { rates: [{ currency: "LOL", rate: 999 }] } }
  };

  const component = renderer.create(
    <MockedProvider mocks={[currencyMock]} addTypename={false}>
      <Currency />
    </MockedProvider>
  );

  await wait(0); // wait for response

  const p = component.root.findByType("p");
  expect(p.children).toContain("LOL: 999");
});

it("should show error UI", async () => {
  const currencyMock = {
    request: { query: GET_EXCHANGE_RATES_QUERY },
    error: new Error("aw shucks")
  };

  const component = renderer.create(
    <MockedProvider mocks={[currencyMock]} addTypename={false}>
      <Currency />
    </MockedProvider>
  );

  await wait(0); // wait for response

  const tree = component.toJSON();
  expect(tree.children).toContain("Error :(");
});
