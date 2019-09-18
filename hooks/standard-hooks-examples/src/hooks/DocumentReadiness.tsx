import * as React from "react";
import { useDocumentReadiness } from "standard-hooks";

export default function DocumentReadiness() {
  const documentReadiness = useDocumentReadiness();

  return (
    <>
      <h1>useDocumentReadiness</h1>
      <p>{`documentReadiness: ${documentReadiness}`}</p>
    </>
  );
}
