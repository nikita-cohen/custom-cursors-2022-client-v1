import "./CookiePolicyPage.css"
import {ActionBar} from "../../component/actionbar/ActionBar";
import InnerLayout from "../../component/innerlayout/InnerLayout";

export function CookiePolicyPage(props) {
    return(
        <div className={"main-container-cookie-policy-page"}>
            <ActionBar type={"IMAGE"}/>
            <div>
                <InnerLayout>
                    <div className={"header-txt-cookie-page"}>
                        <div className={"txt-header-cookie-page"}>
                            Cookie Policy
                        </div>
                    </div>
                </InnerLayout>
            </div>
        </div>
    )
}