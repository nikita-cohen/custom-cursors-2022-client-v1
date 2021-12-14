import "./AddButton.css";

export function AddButton(props) {

    const button = () =>{
        if (props.type === "ADD"){
            return <div className="add-button">
                <p className="txt-button">ADD<i className="fas fa-plus i-class fa-xs"/></p>
                   </div>
        } else if (props.type === "SUCCEED"){
            return <div className="add-button" style={{backgroundColor: "#00D108"}}>
                    <p className="i"><i className="far fa-check-circle fa-lg"/></p>
                </div>
        }
    }

    return(
        <div>
            {button()}
        </div>
    )
}