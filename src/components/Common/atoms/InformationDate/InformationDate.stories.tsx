import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";

import InformationDate from "./InformationDate";

const story = storiesOf("Common/atoms", module);
story.addDecorator(withKnobs);

story.add("InformationDate", () => (
  <InformationDate date={text("date", "2018年12月01日")} />
));
