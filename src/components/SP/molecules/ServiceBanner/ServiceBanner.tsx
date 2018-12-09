import React from "react";

import styles from "./ServiceBanner.scss";
import { banners } from "./banners";

const ServiceBanner = () => (
  <div className={styles.container}>
    {banners.map(banner => (
      <div key={banner.href} className={styles.banner}>
        <a href={banner.href} target="_blank">
          <img src={banner.src} />
        </a>
      </div>
    ))}
  </div>
);

export default ServiceBanner;
