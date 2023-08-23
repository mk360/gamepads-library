import CommonButtons from "./common-buttons";
declare abstract class InputMethod<T extends string = CommonButtons> {
    key: string;
    abstract buttonsIndices: {
        [k in number]: T;
    };
    constructor(key: string);
    abstract getStickAxes(axes: number[]): {
        leftStick: {
            x: number;
            y: number;
        };
        rightStick: {
            x: number;
            y: number;
        };
    };
    getPressedButtons(buttons: readonly GamepadButton[]): T[];
}
export default InputMethod;
