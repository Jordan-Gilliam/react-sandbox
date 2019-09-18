import * as React from "react";
import { useSessionStorage } from "standard-hooks";

export default function SessionStorage() {
  const [name, setName] = useSessionStorage<string>("name", "Anonymous");

  React.useEffect(() => {
    setName(`setName to 'stdH00ksRu1e'@ ${new Date().toLocaleTimeString()}`);
  }, [setName]);

  return (
    <>
      <h1>useSessionStorage</h1>
      <p>{`name: ${name}`}</p>
    </>
  );
}
