import React from "react";

import styles from "./LeadingBanner.scss";
import banner1 from "../../../img/leading_banner_1.png";
import banner2 from "../../../img/leading_banner_2.png";
import banner3 from "../../../img/leading_banner_3.png";

const LeadingBanner = () => (
  <div className={styles.contianer}>
    <div className={styles.text}>
      Leading
      <br />
      Service
    </div>
    <div className={styles.banners}>
      <a href="https://www.nicovideo.jp/" target="_blank">
        <img src={banner1} />
      </a>
      <a href="https://dwango.jp/" target="_blank">
        <img src={banner2} />
      </a>
      <a href="https://animelo.jp/" target="_blank">
        <img src={banner3} />
      </a>
    </div>
  </div>
);

export default LeadingBanner;
