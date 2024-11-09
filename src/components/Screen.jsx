import { THEME } from '../util/Util';
import './Calculator.css';

export const Screen = (props) => {
    return (
        <>
            <div className={`${props.themeColor === THEME.DARK ? "input-container-dark" : "input-container-light"}`}>{props.value}</div>
            <div className={props.themeColor === THEME.DARK ? "result-container-dark" : "result-container-light"}>{props.resultValue}</div>
        </>
    )
}