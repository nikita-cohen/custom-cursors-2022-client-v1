import "./TextAriaForPool.css";
import {CheckBoxForTextAria} from "../chackboxfortextaria/CheckBoxForTextAria";
import {useState} from "react";

export function TextAriaForPool(props) {

    const [isDisable, setIsDisable] = useState(true);

    const checkIfChecked = (checked) => {
      if (checked === true) {
          setIsDisable(true)
      } else {
          setIsDisable(false)
      }
    }

    return(
        <div>
            <CheckBoxForTextAria idC={props.idC} onClickChecked={checkIfChecked} onClickChange={props.onClickChange} />
            <div className={"txt-aria-width"}>
                <textarea disabled={isDisable} id={"txt-aria"} placeholder={"How else can we improve Custom Cursor?"} className={"txt-design-aria"}/>
            </div>
        </div>
    )
}