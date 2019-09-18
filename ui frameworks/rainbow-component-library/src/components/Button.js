import React from "react";

import Button from "react-rainbow-components/components/Button";

export default function RNBW_Button() {
  return (
    <div>
      <h1>Button</h1>
      <Button
        label="Hello World!"
        variant="brand"
        onClick={() => alert("Hello World!")}
      />
    </div>
  );
}
