import React from "react";
import classNames from "classnames";

import styles from "./InformationTag.scss";

export type Props = {
  type: "info" | "press";
};

const InformationTag = ({ type }: Props) => (
  <div className={styles.container}>
    <div className={classNames(styles.tag, styles[type])}>
      {type.toUpperCase()}
    </div>
  </div>
);

export default InformationTag;
