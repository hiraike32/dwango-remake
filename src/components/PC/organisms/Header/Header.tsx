import React from "react";

import styles from "./Header.scss";
import HeaderMenu from "../../atoms/HeaderMenu";
import logo from "../../../../img/dwango_logo.png";

const headerMenus = [
  { text: "お問い合わせ", href: "http://dwango.co.jp/etc/inquiry.html" },
  { text: "会社アクセス", href: "http://dwango.co.jp/corporate/map.html" },
  { text: "免責事項", href: "http://dwango.co.jp/ir/disclaimer.html" },
  { text: "サイトマップ", href: "http://dwango.co.jp/etc/sitemap.html" },
  { text: "English", href: "http://dwango.co.jp/english/index.html" }
];

const Header = () => (
  <React.Fragment>
    <div className={styles.menuContainer}>
      <ul>
        {headerMenus.map((headerMenu, index) => (
          <HeaderMenu
            text={headerMenu.text}
            href={headerMenu.href}
            key={index}
          />
        ))}
      </ul>
    </div>
    <div className={styles.logo}>
      <a href="http://dwango.co.jp/">
        <img src={logo} />
      </a>
    </div>
  </React.Fragment>
);

export default Header;
