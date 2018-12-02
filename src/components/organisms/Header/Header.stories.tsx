import React from "react";
import { storiesOf } from "@storybook/react";

import Header from "./Header";

const story = storiesOf("organisms", module);

story.add("Header", () => <Header />);
