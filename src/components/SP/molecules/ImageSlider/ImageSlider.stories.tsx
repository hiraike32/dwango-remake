import React from "react";
import { storiesOf } from "@storybook/react";

import ImageSlider from "./ImageSlider";
import { withViewport } from "@storybook/addon-viewport";

const story = storiesOf("SP/molecules", module);

story.addDecorator(withViewport("iphone6"));
story.add("ImageSlider", () => <ImageSlider />);
