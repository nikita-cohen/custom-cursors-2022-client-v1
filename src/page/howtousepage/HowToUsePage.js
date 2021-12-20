import "./HowToUsePage.css"
import {ActionBar} from "../../component/actionbar/ActionBar";
import InnerLayout from "../../component/innerlayout/InnerLayout";

export function HowToUsePage(props) {
    return (
        <div className={"main-container-how-to-use-page"}>
            <ActionBar type={"IMAGE"}/>
            <div>
                <InnerLayout>
                    <div className={"txt-header-how-to-use-container"}>
                        <div className={"txt-placeholder-how-to-use-page"}>
                            How to Use?
                        </div>
                    </div>
                </InnerLayout>
            </div>
        </div>
    )
}