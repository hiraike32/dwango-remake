import React from "react";

import styles from "./VisualContent.scss";
import { ImageSlider, LogoDisplay, ServiceBanner } from "../../molecules";

const VisualContent = () => (
  <div className={styles.container}>
    <ImageSlider />
    <LogoDisplay />
    <div className={styles.mission}>
      <div className={styles.heading}>ネットに生まれて、ネットでつながる。</div>
      <div className={styles.text}>Born in the net, Connected by the net.</div>
    </div>
    <ServiceBanner />
  </div>
);

export default VisualContent;
