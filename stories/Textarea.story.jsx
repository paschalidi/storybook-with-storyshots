import React from "react";
import { storiesOf } from "@storybook/react";
import Textarea from "../src/Textarea/index";

storiesOf("Textarea", module)
  .add("default", () => <Textarea label="Default" />)
  .add("disabled", () => <Textarea disabled label="Disabled" />)
  .add("required", () => <Textarea required label="Mandatory" />);
