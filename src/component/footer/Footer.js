import "./Footer.css";
import InnerLayout from "../innerlayout/InnerLayout";
import {useHistory} from "react-router-dom";

export function Footer(props) {

    const history = useHistory()

    return (
        <div className="footer-container">
            <InnerLayout>
                <div className={"menu-style-footer"}>
                    <div onClick={() => history.push("/cursor-collection")} className="vector-container">
                        <img src="vector.png" alt="vector"/>
                        <div className="logo-txt-container">
                            <div className="logo-txt">
                                Custom Cursors
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div onClick={() => history.push("/how-to-use")} className="txt-style">
                            How to Use
                        </div>
                        <div className="txt-style mt">
                            Rate Us
                        </div>
                    </div>
                    <div className="col">
                        <div onClick={() => history.push("/term-of-use")} className="txt-style">
                            Terms of Use
                        </div>
                        <div onClick={() => history.push("/cookie-policy")} className="txt-style mt">
                            Cookie Policy
                        </div>
                    </div>
                    <div className="col">
                        <div onClick={() => history.push("/privacy-policy")} className="txt-style" >
                            Privacy Policy
                        </div>
                    </div>
                </div>
            </InnerLayout>
        </div>
    )
}