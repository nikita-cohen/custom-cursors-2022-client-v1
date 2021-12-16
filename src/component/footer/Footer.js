import "./Footer.css";
import InnerLayout from "../innerlayout/InnerLayout";

export function Footer(props) {
    return (
        <div className="footer-container">
            <InnerLayout>
                <div className={"menu-style-footer"}>
                    <div className="vector-container">
                        <img src="vector.png" alt="vector"/>
                        <div className="logo-txt-container">
                            <div className="logo-txt">
                                Custom Cursors
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="txt-style">
                            How to Use
                        </div>
                        <div className="txt-style mt">
                            Rate Us
                        </div>
                    </div>
                    <div className="col">
                        <div className="txt-style">
                            Terms of Use
                        </div>
                        <div className="txt-style mt">
                            Cookie Policy
                        </div>
                    </div>
                    <div className="col">
                        <div className="txt-style" >
                            Privacy Policy
                        </div>
                    </div>
                </div>
            </InnerLayout>
        </div>
    )
}