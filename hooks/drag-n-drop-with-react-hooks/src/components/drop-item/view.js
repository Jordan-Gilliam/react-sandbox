import React, { forwardRef } from "react";
import "./styles.css";

export default forwardRef(({ children, heading }, ref) => {
  return (
    <div class="container" ref={ref}>
      <h3>{heading}</h3>
      <div className="body">{children}</div>
    </div>
  );
});
