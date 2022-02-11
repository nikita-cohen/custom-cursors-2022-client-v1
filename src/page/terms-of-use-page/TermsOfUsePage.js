import "./TermsOfUsePage.css"
import {ActionBar} from "../../component/action-bar/ActionBar";
import InnerLayout from "../../component/inner-layout/InnerLayout";

export function TermsOfUsePage(props) {
    return (
        <div className={"term-of-use-page-container"}>
            <ActionBar type={"IMAGE"} />
            <div className={"inner-container-terms-of-use"}>
                <InnerLayout>
                    <div className={"text-container-terms-page"}>
                        <div className={"header-terms-page"}>
                            Terms of Use
                        </div>
                    </div>
                </InnerLayout>
            </div>
        </div>
    )
}
