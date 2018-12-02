import React from "react";

import styles from "./Navigation.scss";
import NavigationMenu from "../../molecules/NavigationMenu";
import mainImg from "../../../img/mainv_img.png";

const Navigation = () => (
  <div className={styles.container}>
    <NavigationMenu />
    <img src={mainImg} />
  </div>
);

export default Navigation;
