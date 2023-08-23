## Gamepad Library

A suite of Gamepads for use in browser-based applications (for ex. games).

## Supported Devices

- XInput-compliant controllers (ex. Xbox 360)
- Create a PR to add more!

## Usage example in applications

```js
const { XInput } = require("gamepad-library");

const inputMethod = new XInput();

// in some sort of polling loop

const pad = navigator.getGamepads()[0];
// assuming it is indeed a XInput

const buttons = inputMethod.getPressedButtons(pad);

// check if B button is pressed

if (buttons.includes("B")) {
  // hadoken
}
```
