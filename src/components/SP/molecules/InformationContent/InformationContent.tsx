import React from "react";

import styles from "./InformationContent.scss";
import { InformationDate, InformationTag } from "../../../Common/atoms";

export type Props = {
  type: "info" | "press";
  date: string;
  texts: string[];
  href: string;
};

const InformationContent = ({ type, date, texts, href }: Props) => (
  <div className={styles.container}>
    <div className={styles.head}>
      <InformationTag type={type} />
      <InformationDate date={date} />
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
);

export default InformationContent;
