import React from "react";

import PcRoot from "./PC";
import SpRoot from "./SP";
import "../styles/base.scss";

const Root = () => (
  <React.Fragment>
    {window.innerWidth > 768 ? <PcRoot /> : <SpRoot />}
  </React.Fragment>
);

export default Root;
