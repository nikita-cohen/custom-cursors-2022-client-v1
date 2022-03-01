import "./Footer.css";
import InnerLayout from "../inner-layout/InnerLayout";
import {Link} from "react-router-dom";

export function Footer(props) {

    return (
        <div className="footer-container">
            <InnerLayout>
                <div className={"menu-style-footer"}>
                    <Link to={"/cursor-collection"}  className="vector-container">
                        <img src={process.env.PUBLIC_URL + "/vector.svg"} alt="vector"/>
                        <div className="logo-txt-container">
                            <div className="logo-txt">
                                Custom Cursors
                            </div>
                        </div>
                    </Link>
                    <div className="col">
                        <Link to={"/how-to-use"}  className="txt-style">
                            How to Use
                        </Link>
                        <div className="txt-style mt">
                            Rate Us
                        </div>
                    </div>
                    <div className="col">
                        <Link to={"/term-of-use"}  className="txt-style">
                            Terms of Use
                        </Link>
                        <Link to={"/cookie-policy"}  className="txt-style mt">
                            Cookie Policy
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={"/privacy-policy"}  className="txt-style privacy" >
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </InnerLayout>
        </div>
    )
}
