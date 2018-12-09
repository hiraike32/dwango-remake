import React from "react";
import { storiesOf } from "@storybook/react";
import { withViewport } from "@storybook/addon-viewport";

import ServiceBanner from "./ServiceBanner";

const story = storiesOf("SP/molecules", module);

story.addDecorator(withViewport("iphone6"));
story.add("ServiceBanner", () => <ServiceBanner />);
