import React from "react";
import { storiesOf } from "@storybook/react";
import { withViewport } from "@storybook/addon-viewport";

import Background from "./Background";

const story = storiesOf("SP/organisms", module);

story.addDecorator(withViewport("iphone6"));
story.add("Background", () => <Background />);
