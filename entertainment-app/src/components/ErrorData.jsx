import React from "react";

function ErrorData({ err }) {
  return (
    <h3 className="text-danger-100 text-3xl font-light capitalize tracking-wide mt-8 text-left">
      {err || "Error getting Data"}
    </h3>
  );
}

export default ErrorData;
