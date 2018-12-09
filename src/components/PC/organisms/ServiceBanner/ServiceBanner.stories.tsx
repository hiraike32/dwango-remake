import React from "react";
import { storiesOf } from "@storybook/react";

import ServiceBanner from "./ServiceBanner";

const story = storiesOf("PC/organisms", module);

story.add("ServiceBanner", () => <ServiceBanner />);
