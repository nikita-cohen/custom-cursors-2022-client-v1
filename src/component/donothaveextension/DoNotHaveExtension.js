import "./DoNotHaveExtension.css";
import {InstallNowButton} from "../installnowbutton/InstallNowButton";
import {useHistory} from "react-router-dom";

export function DoNotHaveExtension(props) {

    const history = useHistory();

    return(
        <div className={"main-container-not-extension"}>
            <div className={"first-row-install-container"}>
                <div className={"image-right-corner-container"}>
                    <div className={"txt-container-install-txt"}>
                        <div className={"header-txt-install-page"}>
                            YOU DO NOT HAVE EXTENSION
                        </div>
                        <div className={"description-txt-install-container"}>
                            Click on the button below to set the extension
                            from <strong> Chrome Web Store </strong>
                        </div>
                    </div>
                    <img src={process.env.PUBLIC_URL + "/right-image-for-install.png"} alt={"install"}/>
                    <img onClick={props.closePopUp} className={"del"} src={process.env.PUBLIC_URL + "/del.svg"} alt={"del"}/>
                </div>
                <div className={"image-left-corner-container"}>
                    <div className={"left-corner"}>
                        <img src={process.env.PUBLIC_URL + "/left-image-for-install.svg"} alt={"left"}/>
                    </div>
                    <div className={"btn-and-txt-container-install"}>
                        <div className={"btn-install"}>
                            <InstallNowButton/>
                        </div>
                        <div className={"how-to-use-txt-install"}>
                            <div onClick={() => history.push("/how-to-use")} className={"txt-install-style"}>
                                How to use
                            </div>
                            <div className={"how-to-use-icon-for-install"}>
                                <img src={process.env.PUBLIC_URL + "/how-to-use-for-install.svg"} alt={"how to use"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}