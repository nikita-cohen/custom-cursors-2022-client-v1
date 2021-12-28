import "./StopTryingButton.css";
import {useState} from "react";

export function StopTryingButton(props) {

    const [type, setType] = useState(props.type);

    console.log(props)

    props.onTry(type);

    const onClickBtn = () => {
        if (type === "stop"){
            setType("try")
        } else if (type === "try"){
            setType("stop")
        }
    }

    const btnType = () => {
        if (type === "stop"){
            return (<div onClick={onClickBtn} className="stop-trying-btn">
                       <p className="stop-trying-txt">Stop trying</p>
                   </div>)
        } else if (type === "try"){
            return (<div onClick={onClickBtn} className="stop-trying-btn" style={{backgroundColor: "#197DE1"}}>
                       <p className="stop-trying-txt">Try cursor</p>
                   </div>)

        }
    }

    return(
        <div>
            {btnType()}
        </div>

    )
}