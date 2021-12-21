import "./TextAriaForPool.css";
import {CheckBoxForTextAria} from "../chackboxfortextaria/CheckBoxForTextAria";

export function TextAriaForPool(props) {
    return(
        <div>
            <CheckBoxForTextAria idC={props.idC} onClickChange={props.onClickChange} />
            <div className={"txt-aria-width"}>
                <textarea placeholder={"How else can we improve Custom Cursor?"} className={"txt-design-aria"}/>
            </div>
        </div>
    )
}