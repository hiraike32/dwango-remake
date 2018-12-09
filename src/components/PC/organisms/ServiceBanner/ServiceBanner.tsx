import React from "react";

import styles from "./ServiceBanner.scss";
import { banners } from "./banners";

const ServiceBanner = () => (
  <React.Fragment>
    {banners.map(banner => (
      <div key={banner.href} className={styles.banner}>
        <a href={banner.href} target="_blank">
          <img src={banner.src} />
        </a>
      </div>
    ))}
  </React.Fragment>
);

export default ServiceBanner;
