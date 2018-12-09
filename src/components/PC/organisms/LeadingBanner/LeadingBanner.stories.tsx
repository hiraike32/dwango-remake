import React from "react";
import { storiesOf } from "@storybook/react";

import LeadingBanner from "./LeadingBanner";

const story = storiesOf("PC/organisms", module);

story.add("LeadingBanner", () => <LeadingBanner />);
