import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Information from "./Information";

const story = storiesOf("organisms", module);
story.addDecorator(withKnobs);

story.add("Information", () => <Information />);
