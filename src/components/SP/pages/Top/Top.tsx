import React from "react";

import styles from "./Top.scss";
import {
  Header,
  Background,
  VisualContent,
  Information,
  Footer
} from "../../organisms";

const Top = () => (
  <div className={styles.container}>
    <Header />
    <Background />
    <VisualContent />
    <div className={styles.information}>
      <Information />
    </div>
    <Footer />
  </div>
);

export default Top;
