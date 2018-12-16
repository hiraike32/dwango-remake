import React from "react";

import styles from "./Top.scss";
import {
  Header,
  Background,
  VisualContent,
  Information,
  Footer
} from "../../organisms";
import { Hamburger } from "../../molecules";

type State = {
  isOpen: boolean;
};

class Top extends React.Component<{}, State> {
  state = {
    isOpen: false
  };

  changeMenu = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div className={styles.container}>
        <Header changeMenu={this.changeMenu} />
        <Hamburger changeMenu={this.changeMenu} isOpen={this.state.isOpen} />
        <Background />
        <VisualContent />
        <div className={styles.information}>
          <Information />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Top;
