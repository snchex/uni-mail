import React from "react";

import { Spinner } from "reactstrap";

const Loader = () => (
  <div className="fallback-spinner">
    <div className="loading">
      <Spinner color="primary" />
    </div>
  </div>
);
export default Loader;
