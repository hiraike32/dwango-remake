import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

import styles from "./InformationContent.scss";

library.add(faCaretRight);

export type Props = {
  type: "info" | "press";
  date: string;
  texts: string[];
  href: string;
};

const InformationContent = ({ type, date, texts, href }: Props) => (
  <div className={styles.container}>
    <div className={classNames(styles.badge, styles[type])}>
      {type.toUpperCase()}
    </div>
    <div>
      <div className={styles.date}>
        <FontAwesomeIcon icon="caret-right" className={styles.icon} />
        {date}
      </div>
      <div className={styles.content}>
        <a href={href} target="_blank">
          {texts.map((text, key) => (
            <div key={key} className={styles.text}>
              {text}
            </div>
          ))}
        </a>
      </div>
    </div>
  </div>
);

export default InformationContent;
