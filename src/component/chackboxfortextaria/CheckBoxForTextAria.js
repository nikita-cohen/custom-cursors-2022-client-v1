import "./CheckBoxForTextAria.css";
import {useState} from "react";

export function CheckBoxForTextAria(props) {
    const [checked , setChecked] = useState(false);

    const onClickCheckBox = () => {
        if (!checked) {
            setChecked(true)
            props.onClickChange(props.idC, true)
        } else if (checked) {
            setChecked(false);
            props.onClickChange(props.idC, false)
        }
    }

    const getClass = () => {
        if (!checked) {
            return "pool-check-box-container-aria"
        } else {
            return "pool-check-box-container-check-aria"
        }
    }

    return (
        <div className={getClass()}>
            <div className={"txt-container-pool-check-box-aria"}>
                Other, please explain
                <div className={"icon-container-pool-aria"}>
                    <img src={"pen-angled.svg"} alt={"pen"}/>
                </div>
            </div>
            <div className={"direct-aria"}>
                <div className={"check-box-v-container-aria"}>
                    <label className="container-aria">
                        <input onClick={onClickCheckBox} type="checkbox"/>
                        <span className="checkmark-aria"/>
                    </label>
                </div>
            </div>

        </div>
    )
}