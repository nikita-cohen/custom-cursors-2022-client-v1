import "./PrivacyPolicyPage.css"
import {ActionBar} from "../../component/action-bar/ActionBar";
import InnerLayout from "../../component/inner-layout/InnerLayout";

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
