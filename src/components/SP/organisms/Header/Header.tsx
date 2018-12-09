import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import styles from "./Header.scss";
import logo from "../../../../img/dwango_logo.png";

library.add(faBars);

const Header = () => (
  <div className={styles.container}>
    <a href="http://dwango.co.jp/" target="_blank">
      <img src={logo} />
    </a>
    <div className={styles.hamburger}>
      <FontAwesomeIcon icon="bars" />
    </div>
  </div>
);

export default Header;
