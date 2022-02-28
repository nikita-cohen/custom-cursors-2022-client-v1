import "./AddButton.css";
import {useEffect, useState} from "react";

export function AddButton(props) {

    const [type, setType] = useState(props.type)

    useEffect(()=>{
        setType(props.type);
    }, [props.type]);


    const onClickBtn = async () => {
        const response = await props.addCursor(props.cursorId);
        if (response === "added") {
            props.setAdd(true)
            setType("SUCCEED")
            setTimeout(() => {
                window.postMessage({ type: "FROM_ADD_CURSOR", text: "Hello from the webpage!" }, "*");
            }, 500)
        }
    }


    const button = () => {
        if (type === "ADD"){
            return <div onClick={onClickBtn} className="add-button">
                <p className="txt-button">ADD<i className="fas fa-plus i-class fa-xs"/></p>
                   </div>
        } else if (type === "SUCCEED"){
            return <div className="add-button" style={{backgroundColor: "#00D108", cursor : "default"}}>
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
