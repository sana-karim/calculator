import './Calculator.css';
import { Theme } from './Theme';
import { Screen } from './Screen';
import { ButtonContainer } from './ButtonContainer';
import { useRef, useState } from 'react';
import { THEME } from '../util/Util';
import { OPERATORS } from '../util/Objects';
import { OPERATORS_ARRAY } from '../util/ObjectsArray';

export const Calculator = () => {
    const [theme, setTheme] = useState(THEME.DARK)
    const [btnValue, setBtnValue] = useState("");
    const [resultValue, setResultValue] = useState(0);
    let leftValue = useRef(0);
    let rightValue = useRef(0);
    let operator = useRef(null);
    let index = useRef(0);

    const onBtnClicked = (value) => {

        if (value === "AC") {            //base condition
            setBtnValue("");                //Not working
            setResultValue(0);
        } else if (value === "undo") {
            removeLastCharacter();
        } else {
            if (value === "+") {
                leftValue.current = Number(btnValue); //stuck in this line when 123+2+2=2
                console.log("leftValue inside +  operator: ", leftValue.current);
                setBtnValue(btnValue + value);

            } // use else if

            if (value === "-") {
                leftValue.current = Number(btnValue);
                setBtnValue(btnValue + value);
            }
            if (value === "x") {
                leftValue.current = Number(btnValue);
                setBtnValue(btnValue + value);
            }
            if (value === "/") {
                leftValue.current = Number(btnValue);
                setBtnValue(btnValue + value);
            }
            if (value === "%") {                  //For Remainder
                leftValue.current = Number(btnValue);
                setBtnValue(btnValue + value);
            }
            if (value !== "=") {
                setBtnValue(btnValue + value);
                console.log("+: ", btnValue)
            }
            if (value === OPERATORS.EQUAL) {
                console.log("btnValue inside equal block: ", btnValue);
                for (let i = 0; i < btnValue.length; i++) {
                    console.log(i, ": ", btnValue[i]);

                    if (OPERATORS_ARRAY.includes(btnValue[i])) { //Error when value is 2
                        console.log("Operators Detected");

                        if (operator.current === null) {
                            operator = btnValue[i];
                            console.log("operator assigned: ", operator);
                            leftValue.current = Number(btnValue.substring(index.current, i));
                            console.log("leftValue: ", typeof (leftValue.current), leftValue.current)
                            console.log("index: ", typeof (index.current), index.current)
                            index.current = i + 1;
                            console.log("index after increment: ", typeof (index.current), index.current)
                        } else {
                            rightValue.current = Number(btnValue.substring(index.current, i))
                            console.log("second operator detected");
                            console.log("rightValue: ", rightValue.current, typeof (rightValue.current));
                            index.current = i + 1;
                            calculation();
                            console.log("else index value: ", index.current, typeof (index.current));
                            operator = btnValue[i];
                            leftValue.current = resultValue;
                            rightValue.current = 0;
                        }
                    } else {                // new code
                        rightValue.current = Number(btnValue.substring(index.current, i + 1))
                        calculation();
                        console.log("before calculation else: ", rightValue.current, typeof (rightValue.current));
                    }

                }
            }

            function calculation() {
                switch (operator) {
                    case OPERATORS.ADD:
                        setResultValue(leftValue.current + rightValue.current);

                        break;
                    case OPERATORS.SUBTRACT:
                        setResultValue(leftValue.current - rightValue.current);
                        break;
                    case OPERATORS.MULTIPLY:
                        setResultValue(leftValue.current * rightValue.current);
                        break;
                    case OPERATORS.DIVIDE:
                        setResultValue(leftValue.current / rightValue.current);
                        break;
                    case OPERATORS.MODULUS:
                        setResultValue(leftValue.current % rightValue.current);
                        break;
                    default:
                        return;
                }
            }
            console.log("else block btnValue: ", btnValue, "render issue");

            /* if (value === "=") {
                if (btnValue.includes("+")) {
                    console.log(typeof (btnValue));
                    let arr = btnValue.split("+");
                    rightValue.current = Number(arr[arr.length - 1]);
                    sum();
                } else if(btnValue.includes("-")){
                    let arr = btnValue.split("-");
                    rightValue.current = Number(arr[arr.length - 1]);
                    sub();
                } else if (btnValue.includes("x")){
                    let arr = btnValue.split("x");
                    rightValue.current = Number(arr[arr.length - 1]);
                    multiply();
                } else if (btnValue.includes("/")){
                    let arr = btnValue.split("/");
                    rightValue.current = Number(arr[arr.length - 1]);
                    divide();
                } else if (btnValue.includes("%")){
                    let arr = btnValue.split("%");
                    rightValue.current = Number(arr[arr.length - 1]);
                    remainder();
                }
                
            } */
        }
    }

    /*     const sum = () => {
            setResultValue(leftValue.current + rightValue.current);
        }
        const sub = () => {
            setResultValue(leftValue.current - rightValue.current);
        }
        const multiply = () => {
            setResultValue(leftValue.current * rightValue.current);
        }
        const divide = () => {
            setResultValue(leftValue.current / rightValue.current);
        }
        const remainder = () => {
            setResultValue(leftValue.current % rightValue.current);
        } */

    const onToggleCall = (themeValue) => {
        setTheme(themeValue);
    }
    const removeLastCharacter = () => {
        let extractedValue = btnValue.slice(0, btnValue.length - 1);
        setBtnValue(extractedValue);

    }


    return (
        <div className={theme === THEME.DARK ? "parent-container-dark" : "parent-container-light"}>
            <Theme toggleCall={onToggleCall} themeColor={theme} />
            <Screen value={btnValue} resultValue={resultValue} themeColor={theme} />
            <ButtonContainer onClicked={onBtnClicked} themeColor={theme} />
        </div>
    )
}