import React from "react";

import styles from "./Footer.scss";
import logo from "../../../../img/dwango_logo.png";
import copyright from "../../../../img/copyright.png";

const menus = [
  { href: "http://dwango.co.jp/etc/inquiry.html", text: "お問い合わせ" },
  { href: "http://dwango.co.jp/ir/disclaimer.html", text: "免責事項" },
  { href: "http://dwango.co.jp/corporate/map.html", text: "会社アクセス" },
  { href: "http://dwango.co.jp/etc/sitemap.html", text: "サイトマップ" }
];

const Footer = () => (
  <div className={styles.container}>
    <div className={styles.menus}>
      {menus.map(menu => (
        <div className={styles.menu} key={menu.text}>
          <a href={menu.href} target="_blank">
            {menu.text}
          </a>
        </div>
      ))}
    </div>
    <div className={styles.logos}>
      <a href="http://dwango.co.jp/" target="_blank">
        <div className={styles.logo}>
          <img src={logo} className={styles.dwango} />
        </div>
        <div className={styles.logo}>
          <img src={copyright} className={styles.copyright} />
        </div>
      </a>
    </div>
  </div>
);

export default Footer;
