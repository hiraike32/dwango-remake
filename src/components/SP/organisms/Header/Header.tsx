import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import styles from "./Header.scss";
import logo from "../../../../img/dwango_logo.png";
import { Hamburger } from "../../molecules";

library.add(faBars);

type State = {
  isOpen: boolean;
};

class Header extends React.Component<{}, State> {
  state = {
    isOpen: false
  };

  changeMenu = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div className={styles.container}>
        <a href="http://dwango.co.jp/" target="_blank">
          <img src={logo} />
        </a>
        <div className={styles.hamburger} onClick={this.changeMenu}>
          <FontAwesomeIcon icon="bars" />
        </div>
        <Hamburger changeMenu={this.changeMenu} isOpen={this.state.isOpen} />
      </div>
    );
  }
}

export default Header;
