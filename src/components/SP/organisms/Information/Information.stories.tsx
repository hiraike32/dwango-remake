import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withViewport } from "@storybook/addon-viewport";

import Information from "./Information";

const story = storiesOf("SP/organisms", module);
story.addDecorator(withKnobs);
story.addDecorator(withViewport("iphone6"));
story.add("Information", () => <Information />);
