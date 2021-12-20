import "./PrivacyPolicyPage.css"
import {ActionBar} from "../../component/actionbar/ActionBar";
import InnerLayout from "../../component/innerlayout/InnerLayout";

export function PrivacyPolicyPage(props) {
    return(
        <div className={"privacy-page-container"}>
            <ActionBar type={"IMAGE"}/>
            <div>
                <InnerLayout>
                    <div className={"txt-header-privacy-container"}>
                        <div className={"txt-privacy-policy"}>
                            Privacy Policy
                        </div>
                    </div>
                </InnerLayout>
            </div>
        </div>
    )
}