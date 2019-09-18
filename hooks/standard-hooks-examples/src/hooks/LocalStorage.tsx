import * as React from "react";
import { useLocalStorage } from "standard-hooks";

export default function LocalStorage() {
  const [visitCount, setVisitCount] = useLocalStorage<number>("visitCount", 0);
  React.useEffect(() => {
    setVisitCount(count => count + 1);
  }, [setVisitCount]);

  return (
    <>
      <h1>useLocalStorage</h1>
      <p>{`visitCount: ${visitCount}`}</p>
    </>
  );
}
