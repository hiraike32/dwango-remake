import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";

import HeaderMenu from "./HeaderMenu";

const story = storiesOf("atoms", module);
story.addDecorator(withKnobs);

story.add("HeaderMenu", () => (
  <HeaderMenu text={text("text", "お問い合わせ")} href="#" />
));
