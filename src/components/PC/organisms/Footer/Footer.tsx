import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";

import styles from "./Footer.scss";
import logo from "../../../../img/dwango_logo.png";
import copyright from "../../../../img/copyright.png";
import { NavigationItem } from "../../atoms";
import { FooterMenu } from "../../molecules";

library.add(faAngleDoubleUp);

class Footer extends React.Component<{}> {
  scrollTop = () => {
    scroll.scrollToTop({ duration: 500 });
  };
  render() {
    return (
      <React.Fragment>
        <div className={styles.menu}>
          <FooterMenu />
          <div className={styles.scrollButton}>
            <NavigationItem>
              <div className={styles.scroll} onClick={this.scrollTop}>
                <FontAwesomeIcon
                  icon="angle-double-up"
                  className={styles.icon}
                />
                ページの先頭へ戻る
              </div>
            </NavigationItem>
          </div>
        </div>
        <div className={styles.logos}>
          <a href="http://dwango.co.jp/">
            <div className={styles.logo}>
              <img src={logo} className={styles.dwango} />
            </div>
            <div className={styles.logo}>
              <img src={copyright} />
            </div>
          </a>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
