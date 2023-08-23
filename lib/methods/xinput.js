"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var input_method_1 = require("../../input-method");
var XInput = /** @class */ (function (_super) {
    __extends(XInput, _super);
    function XInput() {
        var _this = _super.call(this, "xinput") || this;
        _this.buttonsIndices = {
            0: "A",
            1: "B",
            2: "X",
            3: "Y",
            4: "LB",
            5: "RB",
            6: "LT",
            7: "RT",
            8: "Back",
            9: "Start",
            10: "L-Stick",
            11: "R-Stick",
            12: "DPad-Up",
            13: "DPad-Down",
            14: "DPad-Left",
            15: "DPad-Right"
        };
        return _this;
    }
    XInput.prototype.getStickAxes = function (axes) {
        return {
            leftStick: {
                x: axes[0],
                y: axes[1]
            },
            rightStick: {
                x: axes[2],
                y: axes[3]
            }
        };
    };
    return XInput;
}(input_method_1.default));
exports.default = XInput;
