"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InputMethod = /** @class */ (function () {
    function InputMethod(key) {
        this.key = key;
    }
    InputMethod.prototype.getPressedButtons = function (buttons) {
        var pressedButtons = [];
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].pressed) {
                pressedButtons.push(this.buttonsIndices[i]);
            }
        }
        return pressedButtons;
    };
    ;
    return InputMethod;
}());
;
exports.default = InputMethod;
