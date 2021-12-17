import "./SuccessPopUp.css"

export function SuccessPopUp(props) {
    return(
        <div className={"success-container"}>
            <div className={"x-icon"}>
                <img className={"img-x"} src={"x.png"} alt={"x"}/>
            </div>
            <div className={"top-txt-success"}>
                <div className={"success-txt"}>Success</div>
                <div className={"img-success-container"}><img src={"v.png"} alt={"v"}/></div>
            </div>
            <div className={"description-txt-success"}>
                <div className={"description-style"}>
                    Cursor have installed to Your Collection
                </div>
            </div>
        </div>
    )
}