import React from "react";

import styles from "./FooterMenu.scss";

const footerMenus = [
  {
    text: "TOP",
    href: "/"
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

const FooterMenu = () => (
  <ul className={styles.container}>
    {footerMenus.map(footerMenu => (
      <li className={styles.item} key={footerMenu.href}>
        <a href={footerMenu.href} target="_blank">
          {footerMenu.text}
        </a>
      </li>
    ))}
  </ul>
);

export default FooterMenu;
