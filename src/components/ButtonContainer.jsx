import './Calculator.css';
import { Button } from './Button';
import { THEME } from '../util/Util';

export const ButtonContainer = ({ onClicked, themeColor }) => {

    const onBtnClicked = (buttonLabel) => {
        onClicked(buttonLabel)

    }


    return (
        <div className={themeColor === THEME.DARK ? "button-container-dark" : "button-container-light"}>
            <div className="button-col-first">
                <Button buttonLabel={"AC"} onClickCall={onBtnClicked} buttonTheme={themeColor} lightFont={"#26fad3"} darkFont={"#1ab699"} />
                <Button buttonLabel={"+/-"} onClickCall={onBtnClicked} buttonTheme={themeColor} lightFont={"#26fad3"} darkFont={"#1ab699"} />
                <Button buttonLabel={"%"} onClickCall={onBtnClicked} buttonTheme={themeColor} lightFont={"#26fad3"} darkFont={"#1ab699"} />
                <Button buttonLabel={"/"} onClickCall={onBtnClicked} buttonTheme={themeColor} lightFont={"#eb6666"} darkFont={"##be5252"} />
            </div>
            <div className="button-col-second">
                <Button buttonLabel={7} onClickCall={onBtnClicked} buttonTheme={themeColor} />
                <Button buttonLabel={8} onClickCall={onBtnClicked} buttonTheme={themeColor} />
                <Button buttonLabel={9} onClickCall={onBtnClicked} buttonTheme={themeColor} />
                <Button buttonLabel={"x"} onClickCall={onBtnClicked} buttonTheme={themeColor} lightFont={"#eb6666"} darkFont={"##be5252"} />
            </div>
            <div className="button-col-third">
                <Button buttonLabel={4} onClickCall={onBtnClicked} buttonTheme={themeColor} />
                <Button buttonLabel={5} onClickCall={onBtnClicked} buttonTheme={themeColor} />
                <Button buttonLabel={6} onClickCall={onBtnClicked} buttonTheme={themeColor} />
                <Button buttonLabel={"-"} onClickCall={onBtnClicked} buttonTheme={themeColor} lightFont={"#eb6666"} darkFont={"##be5252"} />
            </div>
            <div className="button-col-fourth">
                <Button buttonLabel={1} onClickCall={onBtnClicked} buttonTheme={themeColor} />
                <Button buttonLabel={2} onClickCall={onBtnClicked} buttonTheme={themeColor} />
                <Button buttonLabel={3} onClickCall={onBtnClicked} buttonTheme={themeColor} />
                <Button buttonLabel={"+"} onClickCall={onBtnClicked} buttonTheme={themeColor} lightFont={"#eb6666"} darkFont={"##be5252"} />
            </div>
            <div className="button-col-fifth">
                {/* <Button buttonLabel={themeColor == THEME.DARK ? <img className='undo-btn' src={undoLight} alt="alt" /> : <img className='undo-btn' src={undoDark} alt="alt" />} onClickCall={onBtnClicked} buttonTheme={themeColor} /> */}
                {/* <Button buttonLabel={<img className='undo-btn' src={undoImg} alt="alt" />} onClickCall={(undoVal) => undoClick(undoVal)} buttonTheme={themeColor} /> */}
                <Button buttonLabel={"undo"} undoBtn={true} onClickCall={onBtnClicked} buttonTheme={themeColor} />
                <Button buttonLabel={0} onClickCall={onBtnClicked} buttonTheme={themeColor} />
                <Button buttonLabel={"."} onClickCall={onBtnClicked} buttonTheme={themeColor} />
                <Button buttonLabel={"="} onClickCall={onBtnClicked} buttonTheme={themeColor} lightFont={"#eb6666"} darkFont={"##be5252"} />
            </div>
        </div>
    )
}
/* paste inside undoButton themeColor == THEME.DARK ? <img className='undo-btn' src={undoLight} alt="alt" /> : <img className='undo-btn' src={undoDark} alt="alt" /> */