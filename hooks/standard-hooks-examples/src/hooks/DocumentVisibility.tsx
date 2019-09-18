import * as React from "react";
import { useDocumentVisibility } from "standard-hooks";

export default function DocumentVisibility() {
  const documentVisibility = useDocumentVisibility();

  return (
    <>
      <h1>useDocumentVisibility</h1>
      <p>{`documentVisibility: ${documentVisibility}`}</p>
    </>
  );
}
