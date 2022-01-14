import "./AddButton.css";
import {useState} from "react";

export function AddButton(props) {

    const [type, setType] = useState(props.type)

    const onClickBtn = () => {
        if (type === "ADD"){
            setType("SUCCEED")
        } else if (type === "SUCCEED"){
            setType("ADD")
        }
    }

    const button = () =>{
        if (type === "ADD"){
            return <div onClick={onClickBtn} className="add-button">
                <p className="txt-button">ADD<i className="fas fa-plus i-class fa-xs"/></p>
                   </div>
        } else if (type === "SUCCEED"){
            return <div onClick={onClickBtn} className="add-button" style={{backgroundColor: "#00D108"}}>
                    <p className="i"><img src={process.env.PUBLIC_URL + "/v-card.svg"} alt={"some"}/></p>
                </div>
        }
    }

    return(
        <div>
            {button()}
        </div>
    )
}