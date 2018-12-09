import React from "react";

import styles from "./MoreInformationButton.scss";

const MoreInformationButton = () => (
  <div className={styles.button}>
    <a href="http://dwango.co.jp/pi/" target="_blank">
      新着情報一覧へ
    </a>
  </div>
);

export default MoreInformationButton;
