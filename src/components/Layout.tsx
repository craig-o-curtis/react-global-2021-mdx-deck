// example Layout.js
import React from "react";

export default ({ children }) => (
  <div
    style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      padding: "2rem",
    }}
  >
    {children}
  </div>
);
