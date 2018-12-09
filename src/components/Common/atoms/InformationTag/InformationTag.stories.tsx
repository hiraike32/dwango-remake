import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select } from "@storybook/addon-knobs";

import InformationTag from "./InformationTag";

const story = storiesOf("Common/atoms", module);
story.addDecorator(withKnobs);

story.add("InformationTag", () => (
  <InformationTag type={select("type", ["info", "press"], "info")} />
));
