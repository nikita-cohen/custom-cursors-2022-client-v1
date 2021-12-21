import "./ThankYouPage.css"
import {ActionBar} from "../../component/actionbar/ActionBar";
import InnerLayout from "../../component/innerlayout/InnerLayout";
import {SubmitFeedBackButton} from "../../component/submitfeedbackbutton/SubmitFeedBackButton";
import {useState} from "react";
import {Footer} from "../../component/footer/Footer";

export function ThankYouPage(props) {

    const [email, setEmail] = useState("");
    const [type, setType] = useState("INACTIVE");

    if (email !== "" && type !== "ACTIVE"){
        setType("ACTIVE")
    } else if (email === "" && type !== "INACTIVE") {
        setType("INACTIVE")
    }

    return (
        <div>
            <ActionBar type={"IMAGE"}/>
            <div className={"thank-you-page-container"}>
                <InnerLayout>
                    <div className={"content-container-thank-you-page"}>
                        <div className={"img-thank-you-container"}>
                            <img src={"clip-emoji.svg"} alt={"clip"}/>
                        </div>
                        <div className={"header-container-title-thank-you-page"}>
                            thank you for your responses
                        </div>
                        <div className={"description-thank-you-page-container"}>
                                Please, leave your email as we have a couple of
                        </div>
                        <div className={"description-thank-you-page-container"}>
                            questions to make our extension better.
                        </div>
                        <div className={"input-thank-you-container"}>
                            <input onChange={(event) => {setEmail(event.target.value)}} placeholder={"please write your email here"} className={"input-thank-you"}/>
                        </div>
                        <div className={"btn-holder-submit-feed"}>
                            <SubmitFeedBackButton type={type}/>
                        </div>
                    </div>
                </InnerLayout>
                <div className={"footer-container-thank-you-page"}>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}