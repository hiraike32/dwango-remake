import React from "react";

import styles from "./NavigationItem.scss";

type Props = {
  children: React.ReactNode;
  href?: string;
};

const NavigationItem = ({ children, href }: Props) => (
  <li className={styles.item}>
    <a href={href} target="_blank">
      {children}
    </a>
  </li>
);

export default NavigationItem;
