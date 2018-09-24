# storybook-addon-zeplin

![Storybook Addon For zeplin](https://raw.githubusercontent.com/hharnisc/storybook-addon-zeplin/master/storybook-addon-zeplin.gif)

Live Demo: https://hharnisc.github.io/storybook-addon-zeplin

## Quickstart

Install the addon

```sh
npm i --save-dev storybook-addon-zeplin
```

Register the plugin

```jsx
// in .storybook/addons.js
import "@storybook/addon-actions/register";
// register the zeplin addon
import "storybook-addon-zeplin/register";
```

Link a zeplin design to your story

## With React

```jsx
import React from "react";
import { storiesOf } from "@storybook/react";
import { WithZeplin } from "storybook-addon-zeplin";

storiesOf("Button").add("With zeplin", () => (
  <WithZeplin
    url={"https://www.zeplin.com/file/LbcvMJxDtshDmYtdyfJfkA72/Button-Primary"}
  >
    <button>My Button</button>
  </WithZeplin>
));
```

## With Vue

```jsx
import Vue from "vue";
import { storiesOf } from "@storybook/vue";
import { WithZeplin } from "storybook-addon-zeplin/vue";

storiesOf("Button").add("With zeplin", () => ({
  components: { WithZeplin },
  template: `
      <with-zeplin url="https://www.zeplin.com/file/LbcvMJxDtshDmYtdyfJfkA72/Button-Primary">
        <button>My Button</button>
      </with-zeplin>
    `
}));
```

## Embed a different design on each story

```jsx
import React from "react";
import { storiesOf } from "@storybook/react";
import { WithZeplin } from "storybook-addon-zeplin";

storiesOf("Button")
  .add("primary", () => (
    <WithZeplin
      url={
        "https://www.zeplin.com/file/LbcvMJxDtshDmYtdyfJfkA72/Button-Primary"
      }
    >
      <button>My Button</button>
    </WithZeplin>
  ))
  .add("secondary", () => (
    <WithZeplin
      url={
        "https://www.zeplin.com/file/LbcvMJxDtshDmYtdyfJfkA72/Button-Secondary"
      }
    >
      <button>My Secondary Button</button>
    </WithZeplin>
  ));
```

## Or use the decorator to put the same design on each story

```jsx
import React from "react";
import { storiesOf } from "@storybook/react";
import zeplinDecorator from "storybook-addon-zeplin";
import App from "./components/App";

storiesOf("App")
  .addDecorator(
    zeplinDecorator({
      url: "https://www.zeplin.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File"
    })
  )
  .add("My App", () => <App />);
```

## Show zeplin design in right panel

If you find that the zeplin panel at the bottom is not big enough to fit your designs, it is possible to move the panel to the right of the window instead, where it is possible to give it more space. This requires the [@storybook/addons-options](https://github.com/storybooks/storybook/tree/master/addons/options) addon. Note however that it is only possible to do this for **all** stories at once, and will move all addon panels to the right. A simple setup is shown here.

Install the addon

```sh
npm install --save-dev @storybook/addon-options
```

Register the options addon in your `addons.js`

```jsx
// in .storybook/addons.js
import "@storybook/addon-actions/register";
import "storybook-addon-zeplin/register";
// register the options addon
import "@storybook/addon-options/register";
```

Import and use the `setOptions` function in your `config.js` file

```jsx
// in .storybook/config.js
import * as storybook from "@storybook/react";
// import the options function
import { setOptions } from "@storybook/addon-options";

// set option to show panel in right side
setOptions({
  downPanelInRight: true
});

storybook.configure(() => require("./stories"), module);
```
