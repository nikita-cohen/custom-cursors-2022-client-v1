import "./TextAriaForPool.css";
import {CheckBoxForTextAria} from "../chack-box-for-text-aria/CheckBoxForTextAria";
import {useState} from "react";

export function TextAriaForPool(props) {

    const [textValue, setTextValue] = useState("");
    const [check, setCheck] = useState(false)

    if (textValue !== "" && check === false) {
        setCheck(true);
        props.onClickChange(props.idC, true)
    } else if (textValue === "" && check === true) {
        setCheck(false)
        props.onClickChange(props.idC, false)
    }

    const changeBorder = () => {
        if (check) {
            return "txt-design-aria-border-blue"
        } else {
            return "txt-design-aria"
        }
    }

    props.setText(textValue);

    return(
        <div>
            <CheckBoxForTextAria idC={props.idC} checked={check}  onClickChange={props.onClickChange} />
            <div className={"txt-aria-width"}>
                <textarea  onChange={(event) => {
                    setTextValue(event.target.value);
                }} id={"txt-aria"} placeholder={"How else can we improve Custom Cursor?"} className={changeBorder()}/>
            </div>
        </div>
    )
}
