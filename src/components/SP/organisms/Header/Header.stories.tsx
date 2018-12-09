import React from "react";
import { storiesOf } from "@storybook/react";

import Header from "./Header";
import { withViewport } from "@storybook/addon-viewport";

const story = storiesOf("SP/organisms", module);

story.addDecorator(withViewport("iphone6"));
story.add("Header", () => <Header />);
