import "./InstallNowButton.css"

export function InstallNowButton(props) {
    return (
        <div className={"install-btn-container"}>
            <div className={"inner-txt-install-container"}>
                <div className={"img-container-install"}>
                    <img src={"chrome-install-btn.svg"} alt={"button"}/>
                </div>
                <div className={"txt-container-install"}>
                    INSTALL NOW
                </div>
            </div>
        </div>
    )
}