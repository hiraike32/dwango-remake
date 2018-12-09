import React from "react";
import { storiesOf } from "@storybook/react";
import { withViewport } from "@storybook/addon-viewport";

import Footer from "./Footer";

const story = storiesOf("SP/organisms", module);

story.addDecorator(withViewport("iphone6"));
story.add("Footer", () => <Footer />);
