import CommonButtons from "../common-buttons";
import InputMethod from "../../input-method";
type XBoxButtons = CommonButtons | "A" | "B" | "X" | "Y" | "RT" | "LT" | "RB" | "LB" | "R-Stick" | "L-Stick" | "Start" | "Back";
declare class XInput extends InputMethod<XBoxButtons> {
    buttonsIndices: {
        [x: number]: XBoxButtons;
    };
    constructor();
    getStickAxes(axes: readonly number[]): {
        leftStick: {
            x: number;
            y: number;
        };
        rightStick: {
            x: number;
            y: number;
        };
    };
}
export default XInput;
