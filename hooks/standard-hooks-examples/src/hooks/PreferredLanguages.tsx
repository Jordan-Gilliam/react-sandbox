import * as React from "react";
import { usePreferredLanguages } from "standard-hooks";

export default function PreferredLanguages() {
  const preferredLanguages = usePreferredLanguages();

  return (
    <>
      <h1>usePreferredLanguages</h1>
      <p>{`preferredLanguages: ${preferredLanguages}`}</p>
    </>
  );
}
