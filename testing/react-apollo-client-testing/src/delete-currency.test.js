import React from "react";
import { MockedProvider } from "react-apollo/test-utils";
import renderer from "react-test-renderer";
import wait from "waait";

import DeleteButton, { DELETE_CURRENCY_MUTATION } from "./delete-currency";

it("should render without error", () => {
  renderer.create(
    <MockedProvider mocks={[]}>
      <DeleteButton />
    </MockedProvider>
  );
});

it("should render loading state initially", () => {
  const deleteCurrency = { currency: "USD", rate: 1.0 };
  const mocks = [
    {
      request: {
        query: DELETE_CURRENCY_MUTATION,
        variables: { name: "USD" }
      },
      result: { data: { deleteCurrency } }
    }
  ];

  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <DeleteButton />
    </MockedProvider>
  );

  // find the button and simulate a click
  const button = component.root.findByType("button");
  button.props.onClick(); // fires the mutation

  const tree = component.toJSON();
  expect(tree.children).toContain("Loading...");
});

it("should delete and give visual feedback", async () => {
  const deleteCurrency = { currency: "USD", rate: 1.0 };
  const mocks = [
    {
      request: {
        query: DELETE_CURRENCY_MUTATION,
        variables: { name: "USD" }
      },
      result: { data: { deleteCurrency } }
    }
  ];

  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <DeleteButton />
    </MockedProvider>
  );

  // find the button and simulate a click
  const button = component.root.findByType("button");
  button.props.onClick(); // fires the mutation

  await wait(0);

  const tree = component.toJSON();
  expect(tree.children).toContain("Deleted!");
});

it("should show error UI", async () => {
  const mocks = [
    {
      request: {
        query: DELETE_CURRENCY_MUTATION,
        variables: { name: "USD" }
      },
      result: { errors: [{ message: "boi" }] }
    }
  ];

  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <DeleteButton />
    </MockedProvider>
  );

  // find the button and simulate a click
  const button = component.root.findByType("button");

  button.props.onClick(); // fires the mutation
  await wait(0);

  const tree = component.toJSON();
  expect(tree.children).toContain("Error :(");
});
