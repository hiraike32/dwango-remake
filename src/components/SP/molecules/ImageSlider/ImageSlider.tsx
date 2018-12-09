import React from "react";
import ReactSwipe from "react-swipe";

import styles from "./ImageSlider.scss";
import image1 from "../../../../img/sp_main1.jpg";
import image2 from "../../../../img/sp_main2.jpg";
import image3 from "../../../../img/sp_main3.jpg";
import image4 from "../../../../img/sp_main4.jpg";

const images = [
  { src: image1, href: "http://chokaigi.jp/" },
  { src: image2, href: "https://tokaigi.jp/" },
  { src: image3, href: "https://artilife.net/" },
  { src: image4, href: "https://www.nnn.ed.nico/" }
];

const ImageSlider = () => {
  return (
    <div className={styles.container}>
      <ReactSwipe
        swipeOptions={{ auto: 3000, speed: 1500 }}
        className={styles.swiper}
      >
        {images.map(image => (
          <div className={styles.image} key={image.src}>
            <a href={image.href} target="_blank">
              <img src={image.src} />
            </a>
          </div>
        ))}
      </ReactSwipe>
    </div>
  );
};

export default ImageSlider;
