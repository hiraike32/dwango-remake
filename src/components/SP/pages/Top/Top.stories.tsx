import React from "react";
import { storiesOf } from "@storybook/react";
import { withViewport } from "@storybook/addon-viewport";

import Top from "./Top";

const story = storiesOf("SP/pages", module);

story.addDecorator(withViewport("iphone6"));
story.add("Top", () => <Top />);
