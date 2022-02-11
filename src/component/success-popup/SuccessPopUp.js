import "./SuccessPopUp.css"

export function SuccessPopUp(props) {
    return(
        <div className={"success-container"}>
            <div className={"x-icon"}>
                <img onClick={props.closePopUp} className={"img-x"} src={process.env.PUBLIC_URL + "/x.svg"} alt={"x"}/>
            </div>
            <div className={"top-txt-success"}>
                <div className={"success-txt"}>Success</div>
                <div className={"img-success-container"}><img src={process.env.PUBLIC_URL + "/v.svg"} alt={"v"}/></div>
            </div>
            <div className={"description-txt-success"}>
                <div className={"description-style"}>
                    Cursor have installed to Your Collection
                </div>
            </div>
        </div>
    )
}