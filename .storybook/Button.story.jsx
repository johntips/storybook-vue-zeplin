import React from "react";
import { storiesOf } from "@storybook/react";
import { WithZeplin } from "../src/index";

const style = {
  margin: 0,
  padding: "0.7rem 1.5rem",
  background: "#168eea",
  color: "white",
  border: 0,
  borderRadius: "2rem",
  cursor: "pointer"
};

storiesOf("Button")
  .add("With Figma", () => (
    <WithZeplin
      url={"https://www.figma.com/file/LbcvMJxDtshDmYtdyfJfkA72/Button-Primary"}
    >
      <button style={style}>Button Primary</button>
    </WithZeplin>
  ))
  .add("With Figma No Fullscreen Option", () => (
    <WithZeplin
      url={"https://www.figma.com/file/LbcvMJxDtshDmYtdyfJfkA72/Button-Primary"}
      allowFullScreen={false}
    >
      <button style={style}>Button Primary</button>
    </WithZeplin>
  ))
  .add("Without Figma", () => <button style={style}>Button Primary</button>);
