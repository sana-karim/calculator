import './Button.css';
import { THEME } from '../util/Util';

export const Button = ({ buttonLabel, undoBtn, onClickCall, buttonTheme, lightFont, darkFont }) => {

    let themeBackground = "button-light";
    let themeColor = darkFont;
    const undoDark = require('../assets/undoDark.png');
    const undoLight = require('../assets/undoLight.png');

    const undoImg = THEME.DARK === buttonTheme ? undoLight : undoDark;

    const parentCall = () => {
        onClickCall(buttonLabel)
    }

    if (buttonTheme === THEME.DARK) {
        themeBackground = "button-dark";
        themeColor = lightFont;
    }

    return (
        <div
            className={themeBackground}
            style={{ color: themeColor }}
            onClick={() => parentCall()}>

            {
                undoBtn ?
                    <img className='undo-btn' src={undoImg} alt="alt" /> :
                    buttonLabel
            }

        </div>
    )
}