import React from "react";
import { storiesOf } from "@storybook/react";
import { withViewport } from "@storybook/addon-viewport";
import { action } from "@storybook/addon-actions";

import Hamburger from "./Hamburger";

const story = storiesOf("SP/molecules", module);
story.addDecorator(withViewport("iphone6"));

story.add("Hamburger", () => (
  <Hamburger changeMenu={() => action("click")} isOpen />
));
