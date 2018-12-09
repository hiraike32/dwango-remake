import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";

import NavigationItem from "./NavigationItem";

const story = storiesOf("PC/atoms", module);
story.addDecorator(withKnobs);

story.add("NavigationItem", () => (
  <div style={{ width: "8rem" }}>
    <NavigationItem children={text("text", "お問い合わせ")} href="#" />
  </div>
));
