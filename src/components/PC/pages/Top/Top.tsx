import React from "react";

import styles from "./Top.scss";
import {
  Header,
  Navigation,
  LeadingBanner,
  Information,
  ServiceBanner,
  Footer
} from "../../organisms";

const Top = () => (
  <div className={styles.container}>
    <div className={styles.header}>
      <Header />
    </div>
    <div className={styles.navigation}>
      <Navigation />
    </div>
    <div className={styles.leadingBanner}>
      <LeadingBanner />
    </div>
    <div className={styles.information}>
      <Information />
    </div>
    <div className={styles.serviceBanner}>
      <ServiceBanner />
    </div>
    <div className={styles.footer}>
      <Footer />
    </div>
  </div>
);

export default Top;
