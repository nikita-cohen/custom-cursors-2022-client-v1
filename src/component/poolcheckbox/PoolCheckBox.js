import "./PoolCheckBox.css"
import {useState} from "react";

export function PoolCheckBox(props) {

    const [checked , setChecked] = useState(false);

    console.log(checked)

    const onClickCheckBox = () => {
      if (!checked) {
          setChecked(true)
          props.onClickChange(props.idC, true)
      } else if (checked) {
          setChecked(false);
          props.onClickChange(props.idC, false)
      }
    }


    const showView = () => {
        if (!checked) {
            return <div className={"pool-check-box-container"}>
                <div className={"txt-container-pool-check-box"}>
                    {props.text}
                </div>
                <div  className={"direct"}>
                    <div className={"check-box-v-container"}>
                        <label className="container">
                            <input  onClick={onClickCheckBox} type="checkbox"/>
                            <span className="checkmark"/>
                        </label>
                    </div>
                </div>
            </div>
        } else {
            return <div className={"pool-check-box-container-check"}>
                <div className={"txt-container-pool-check-box-checked"}>
                    {props.text}
                </div>
                <div className={"direct"}>
                    <div   className={"check-box-v-container"}>
                        <label  className="container">
                            <input onClick={onClickCheckBox} checked={true} type="checkbox"/>
                            <span  className="checkmark"/>
                        </label>
                    </div>
                </div>
            </div>
        }
    }


    return (
        <div>
            {showView()}
        </div>
    )
}