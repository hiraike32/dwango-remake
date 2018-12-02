import React from "react";
import classNames from "classnames";

import styles from "./Information.scss";
import { HeaderMenu } from "../../atoms";
import { InformationContent } from "../../molecules";
import { Props as InformationProps } from "../../molecules/InformationContent";

const newInformations: InformationProps[] = [
  {
    type: "info",
    date: "2018年12月09日",
    texts: [
      "このページはhiraike32がdwango.co.jpを個人的にリメイクしたものです。",
      "Qiita「dwango.co.jpをReact/TypeScript/Storybookでリメイクしてみた。」"
    ],
    href: "https://qiita.com/hiraike32/c6317aef2805342fc838"
  },
  {
    type: "info",
    date: "2018年12月09日",
    texts: ["各コンポーネントをまとめたstorybookはこちらから"],
    href: "https://hiraike32.github.io/dwango-remake-storybook/"
  },
  {
    type: "info",
    date: "2018年12月09日",
    texts: ["このページのソースコードはこちらから"],
    href: "https://github.com/hiraike32/dwango-remake"
  }
];

const Information = () => (
  <div className={styles.container}>
    <div className={styles.header}>
      新着情報
      <HeaderMenu text="新着情報一覧へ" href="http://dwango.co.jp/pi/" />
    </div>
    <div className={styles.informationContainer}>
      {newInformations.map(newInformation => (
        <div className={styles.information}>
          <InformationContent {...newInformation} />
        </div>
      ))}
    </div>
  </div>
);

export default Information;
