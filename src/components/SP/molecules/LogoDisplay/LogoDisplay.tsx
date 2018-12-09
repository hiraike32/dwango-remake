import React from "react";

import styles from "./LogoDisplay.scss";
import logo1 from "../../../../img/sp_logo1.png";
import logo2 from "../../../../img/sp_logo2.png";
import logo3 from "../../../../img/sp_logo3.jpg";
import logo4 from "../../../../img/sp_logo4.jpg";
import logo5 from "../../../../img/sp_logo5.jpg";
import logo6 from "../../../../img/sp_logo6.jpg";
import logo7 from "../../../../img/sp_logo7.jpg";

const logos = [
  { src: logo1, href: "https://www.nicovideo.jp/" },
  { src: logo2, href: "https://dwango.jp" },
  { src: logo3, href: "https://animelo.jp/" },
  { src: logo4, href: "https://artilife.net/" },
  { src: logo5, href: "https://nnn.ed.jp/" },
  { src: logo6, href: "https://www.nnn.ed.nico/" },
  { src: logo7, href: "https://studio-q.co.jp/" }
];

const ImageSlider = () => (
  <div className={styles.container}>
    {logos.map(logo => (
      <div
        className={styles.logo}
        key={logo.src}
        style={{ animationDelay: `${Math.random() * 4}s` }}
      >
        <a href={logo.href} target="_blank">
          <img src={logo.src} />
        </a>
      </div>
    ))}
  </div>
);

export default ImageSlider;
