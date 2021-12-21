import "./PoolCheckBox.css"
import {useState} from "react";

export function PoolCheckBox(props) {

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
          return "pool-check-box-container"
      } else {
          return "pool-check-box-container-check"
      }
    }

    return (
        <div className={getClass()}>
            <div className={"txt-container-pool-check-box"}>
                {props.text}
            </div>
            <div className={"direct"}>
                <div  className={"check-box-v-container"}>
                    <label className="container">
                        <input onClick={onClickCheckBox} type="checkbox"/>
                        <span className="checkmark"/>
                    </label>
                </div>
            </div>

        </div>
    )
}