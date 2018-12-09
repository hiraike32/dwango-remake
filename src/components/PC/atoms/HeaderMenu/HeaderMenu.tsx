import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

import styles from "./HeaderMenu.scss";

library.add(faChevronCircleRight);

type Props = {
  text: string;
  href: string;
};

const HeaderMenu = ({ text, href }: Props) => (
  <li className={styles.item}>
    <FontAwesomeIcon icon="chevron-circle-right" className={styles.icon} />
    <a href={href} className={styles.text} target="_blank">
      {text}
    </a>
  </li>
);

export default HeaderMenu;
