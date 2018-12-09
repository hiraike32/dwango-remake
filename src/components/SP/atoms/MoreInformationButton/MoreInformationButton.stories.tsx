import React from "react";
import { storiesOf } from "@storybook/react";
import { withViewport } from "@storybook/addon-viewport";

import MoreInformationButton from "./MoreInformationButton";

const story = storiesOf("SP/atoms", module);

story.addDecorator(withViewport("iphone6"));
story.add("MoreInformationButton", () => <MoreInformationButton />);
