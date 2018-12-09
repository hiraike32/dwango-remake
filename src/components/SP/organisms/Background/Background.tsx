import React from "react";
import classNames from "classnames";

import styles from "./Background.scss";

const lines = ["red", "orange", "lime", "green", "sky", "blue", "purple"];

const Background = () => (
  <div className={styles.container}>
    {lines.map(line => (
      <div className={classNames(styles.common, styles[line])} key={line} />
    ))}
  </div>
);

export default Background;
