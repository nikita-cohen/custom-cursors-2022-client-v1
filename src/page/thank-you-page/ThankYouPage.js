import "./ThankYouPage.css"
import {ActionBar} from "../../component/action-bar/ActionBar";
import InnerLayout from "../../component/inner-layout/InnerLayout";
import {SubmitFeedBackButton} from "../../component/submit-feedback-button/SubmitFeedBackButton";
import {useState} from "react";
import {Footer} from "../../component/footer/Footer";
import {usePromiseTracker} from "react-promise-tracker";
import {trackPromise} from "react-promise-tracker";
import {Rings} from "react-loader-spinner";

export function ThankYouPage(props) {

    const [email, setEmail] = useState("");
    const [type, setType] = useState("INACTIVE");
    const id = new URLSearchParams(props.location.search).get("userId");
    const { promiseInProgress } = usePromiseTracker();
    const [buttonClick, setButtonClick] = useState(false);

    if (email !== "" && type !== "ACTIVE"){
        setType("ACTIVE")
    } else if (email === "" && type !== "INACTIVE") {
        setType("INACTIVE")
    }

    const handleSubmit = async () => {
        setButtonClick(true)
        try {
            const response = await trackPromise(fetch("https://v1.nocodeapi.com/nikita_cohen/google_sheets/oBnqwXbBKzilEghz?tabId=sheet1",
                {
                    method : "POST",
                    headers : {
                        'Content-Type' : 'application/json'
                    },
                    body : JSON.stringify([[id, "", '', "", "", "", "", email]])
                }))
        } catch (e) {

        }
    }

    return (promiseInProgress || buttonClick === true ? <div className={"spinner"}><Rings color={"#006EDD"}/></div> :
        <div className={"body-container-thanks-page"}>
        <div>
            <ActionBar type={"IMAGE"}/>
            <div className={"thank-you-page-container"}>
                <InnerLayout>
                    <div className={"content-container-thank-you-page"}>
                        <div className={"img-thank-you-container"}>
                            <img src={"clip-emoji.svg"} alt={"clip"}/>
                        </div>
                        <div className={"header-container-title-thank-you-page"}>
                            THANK YOU FOR YOUR RESPONSES
                        </div>
                        <div className={"description-container-thanks-page"}>
                            <div className={"description-thank-you-page-container"}>
                                Please, leave your email as we have a couple of
                            </div>
                            <div className={"description-thank-you-page-container"}>
                                questions to make our extension better.
                            </div>
                        </div>
                        <div className={"input-thank-you-container"}>
                            <input onChange={(event) => {setEmail(event.target.value)}} placeholder={"Please write your email here"} className={"input-thank-you"}/>
                        </div>
                        <div className={"btn-holder-submit-feed"}>
                            <SubmitFeedBackButton handleSubmit={handleSubmit} type={type} />
                        </div>
                    </div>
                </InnerLayout>
            </div>
        </div>
            <div className={"footer-container-thank-you-page"}>
                <Footer/>
            </div>
        </div>
    )
}
