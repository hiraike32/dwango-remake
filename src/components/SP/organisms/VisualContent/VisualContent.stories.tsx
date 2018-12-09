import React from "react";
import { storiesOf } from "@storybook/react";

import VisualContent from "./VisualContent";
import { withViewport } from "@storybook/addon-viewport";

const story = storiesOf("SP/organisms", module);

story.addDecorator(withViewport("iphone6"));
story.add("VisualContent", () => <VisualContent />);
