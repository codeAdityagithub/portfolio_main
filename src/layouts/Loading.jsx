import React from "react";

import "../css/loading.css";

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-element" style={{ fontSize: "5rem" }}>
        Loading ...
      </div>
    </div>
  );
};

export default Loading;
