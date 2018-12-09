import React from "react";

import styles from "./InformationContent.scss";
import { InformationDate, InformationTag } from "../../../Common/atoms";
import { InformationProps as Props } from "../../../../const/newInformations";

const InformationContent = ({ type, date, texts, href }: Props) => (
  <div className={styles.container}>
    <InformationTag type={type} />
    <div className={styles.information}>
      <InformationDate date={date} />
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
