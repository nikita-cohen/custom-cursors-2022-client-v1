import "./PoolCheckBox.css"
import {useState} from "react";

export function PoolCheckBox(props) {

    const [checked , setChecked] = useState(false);

    const handleOnChange = (e) => {
        const _checked = e.target.checked;
        props.onClickChange(props.idC, _checked);
        setChecked(_checked)
    }

    const showView = () => {
        const classNameCheckBox = checked ? "pool-check-box-container-check" : "pool-check-box-container";
        const classNameContainer = checked ? "txt-container-pool-check-box-checked" : "txt-container-pool-check-box";
        return <label className={classNameCheckBox}>
            <div className={classNameContainer}>
                {props.text}
            </div>
            <div  className={"direct"}>
                <div className={"check-box-v-container"}>
                    <div className="container">
                        <input defaultChecked={checked} type="checkbox" onChange={handleOnChange}/>
                        <span className="checkmark"/>
                    </div>
                </div>
            </div>
        </label>
    }


    return (
        <div>
            {showView()}
        </div>
    )
}