import { THEME } from '../util/Util';
import './Calculator.css';

export const Theme = ({toggleCall, themeColor}) => {

    const light = require('../assets/light.png');
    const lightgray = require('../assets/light1.png');
    const dark = require('../assets/dark.png');

    const onToggle = (theme) => {
        toggleCall(theme)              //make this code conditional
        console.log(theme);
    }

    return(
        <div className="toggle-container">
                <div className={themeColor === THEME.DARK ? "toggle-buttons-dark" : "toggle-buttons-light"}>
                    <div onClick={()=>{onToggle(THEME.LIGHT)}} className="light-theme">
                        {/* <img src={light} className="theme-img" alt="light" /> */}
                        <img src={themeColor === THEME.DARK ? light : lightgray} className="theme-img" alt="light" />
                    </div>
                    <div onClick={()=>{onToggle(THEME.DARK)}} className="dark-theme">
                        <img src={dark} className="theme-img" alt="dark" />
                    </div>
                </div>
            </div>
    )
}