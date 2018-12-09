import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

import styles from "./InformationDate.scss";

library.add(faCaretRight);

export type Props = {
  date: string;
};

const InformationDate = ({ date }: Props) => (
  <div className={styles.date}>
    <FontAwesomeIcon icon="caret-right" className={styles.icon} />
    {date}
  </div>
);

export default InformationDate;
