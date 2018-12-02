import React from "react";
import { storiesOf } from "@storybook/react";

import ServiceBanner from "./ServiceBanner";

const story = storiesOf("organisms", module);

story.add("ServiceBanner", () => <ServiceBanner />);
