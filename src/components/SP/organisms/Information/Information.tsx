import React from "react";

import styles from "./Information.scss";
import { newInformations } from "../../../../const/newInformations";
import InformationContent from "../../molecules/InformationContent";
import MoreInformationButton from "../../atoms/MoreInformationButton";

const Information = () => (
  <div className={styles.container}>
    <div className={styles.header}>新着情報</div>
    <div className={styles.informations}>
      {newInformations.map(newInformation => (
        <InformationContent {...newInformation} key={newInformation.date} />
      ))}
    </div>
    <div className={styles.button}>
      <MoreInformationButton />
    </div>
  </div>
);

export default Information;
