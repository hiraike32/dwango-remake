import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, select } from "@storybook/addon-knobs";

import InformationContent from "./InformationContent";

const story = storiesOf("molecules", module);
story.addDecorator(withKnobs);

story.add("InformationContent", () => (
  <InformationContent
    type={select("type", ["info", "press"], "info")}
    date={text("date", "2018年12月01日")}
    texts={[
      "「IIV」所属クリエイター 成田良悟 原作",
      "鈴木拡樹＆清原 翔のW主演ドラマ「虫籠の錠前」が",
      "WOWOWにて放送決定"
    ]}
    href="#"
  />
));
