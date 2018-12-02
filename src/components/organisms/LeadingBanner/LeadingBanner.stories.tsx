import React from "react";
import { storiesOf } from "@storybook/react";

import LeadingBanner from "./LeadingBanner";

const story = storiesOf("organisms", module);

story.add("LeadingBanner", () => <LeadingBanner />);
