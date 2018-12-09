import React from "react";

import styles from "./Information.scss";
import { HeaderMenu } from "../../atoms";
import { InformationContent } from "../../molecules";
import { newInformations } from "../../../../const/newInformations";

const Information = () => (
  <div className={styles.container}>
    <div className={styles.header}>
      新着情報
      <HeaderMenu text="新着情報一覧へ" href="http://dwango.co.jp/pi/" />
    </div>
    <div className={styles.informationContainer}>
      {newInformations.map(newInformation => (
        <div className={styles.information}>
          <InformationContent {...newInformation} />
        </div>
      ))}
    </div>
  </div>
);

export default Information;
