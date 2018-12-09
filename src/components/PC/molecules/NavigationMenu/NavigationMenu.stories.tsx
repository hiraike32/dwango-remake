import React from "react";
import { storiesOf } from "@storybook/react";

import NavigationMenu from "./NavigationMenu";

const story = storiesOf("PC/molecules", module);

story.add("NavigationMenu", () => <NavigationMenu />);
