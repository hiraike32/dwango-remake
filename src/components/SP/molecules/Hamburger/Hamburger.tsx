import React from "react";
import classNames from "classnames";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import styles from "./Hamburger.scss";

library.add(faTimes);

const menus = [
  {
    text: "トップページ",
    href: "http://dwango.co.jp/"
  },
  {
    text: "会社情報",
    href: "http://dwango.co.jp/corporate/"
  },
  {
    text: "経営方針",
    href: "http://dwango.co.jp/managerial/"
  },
  {
    text: "事業内容",
    href: "http://dwango.co.jp/business/"
  },
  {
    text: "ニュースリリース",
    href: "http://dwango.co.jp/pi/"
  },
  {
    text: "IR情報",
    href: "http://dwango.co.jp/ir/stock.html"
  },
  {
    text: "採用情報",
    href: "http://dwango.co.jp/recruit/"
  }
];

type Props = {
  changeMenu: () => void;
  isOpen: boolean;
};

const Hamburger = ({ changeMenu, isOpen }: Props) => (
  <div className={classNames(styles.container, isOpen && styles.isOpen)}>
    <div onClick={changeMenu}>
      <FontAwesomeIcon icon="times" className={styles.icon} />
    </div>
    {menus.map(menu => (
      <div className={styles.menu} key={menu.text}>
        <a href={menu.href} target="_blank">
          {menu.text}
        </a>
      </div>
    ))}
  </div>
);

export default Hamburger;
