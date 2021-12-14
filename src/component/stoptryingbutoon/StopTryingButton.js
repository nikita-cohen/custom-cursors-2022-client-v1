import "./StopTryingButton.css";

export function StopTryingButton(props) {

    const btnType = () => {
        if (props.type === "stop"){
            return (<div className="stop-trying-btn">
                       <p className="stop-trying-txt">Stop trying</p>
                   </div>)
        } else if (props.type === "try"){
            return (<div className="stop-trying-btn" style={{backgroundColor: "#197DE1"}}>
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