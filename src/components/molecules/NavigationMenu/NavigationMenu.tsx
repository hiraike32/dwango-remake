import React from "react";

import styles from "./NavigationMenu.scss";
import NavigationItem from "../../atoms/NavigationItem";

const NavigationItems = [
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

const NavigationMenu = () => (
  <ul className={styles.container}>
    {NavigationItems.map((navigationMenu, index) => (
      <NavigationItem href={navigationMenu.href} key={index}>
        {navigationMenu.text}
      </NavigationItem>
    ))}
  </ul>
);

export default NavigationMenu;
