import "./Footer.css";
import InnerLayout from "../inner-layout/InnerLayout";
import {useHistory} from "react-router-dom";

export function Footer(props) {

    const history = useHistory()

    return (
        <div className="footer-container">
            <InnerLayout>
                <div className={"menu-style-footer"}>
                    <a href={"/cursor-collection"} onClick={() => history.push("/cursor-collection")} className="vector-container">
                        <img src={process.env.PUBLIC_URL + "/vector.svg"} alt="vector"/>
                        <div className="logo-txt-container">
                            <div className="logo-txt">
                                Custom Cursors
                            </div>
                        </div>
                    </a>
                    <div className="col">
                        <a href={"/how-to-use"} onClick={() => history.push("/how-to-use")} className="txt-style">
                            How to Use
                        </a>
                        <div className="txt-style mt">
                            Rate Us
                        </div>
                    </div>
                    <div className="col">
                        <a href={"/term-of-use"} onClick={() => history.push("/term-of-use")} className="txt-style">
                            Terms of Use
                        </a>
                        <a href={"/cookie-policy"} onClick={() => history.push("/cookie-policy")} className="txt-style mt">
                            Cookie Policy
                        </a>
                    </div>
                    <div className="col">
                        <a href={"/privacy-policy"} onClick={() => history.push("/privacy-policy")} className="txt-style privacy" >
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </InnerLayout>
        </div>
    )
}
