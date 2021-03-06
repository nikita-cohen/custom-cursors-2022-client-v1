import "./ReinstallPage.css"
import {ActionBar} from "../../component/action-bar/ActionBar";
import InnerLayout from "../../component/inner-layout/InnerLayout";
import {ReinstallButton} from "../../component/reinstall-button/ReinstallButton";
import {Footer} from "../../component/footer/Footer";

export function ReinstallPage(props) {
    return(
        <div className={"reinstall-body-container"}>
        <div>
            <ActionBar type={"IMAGE"}/>
            <div className={"reinstall-page-container"}>
                <InnerLayout>
                    <div className={"container-inner-reinstall-page"}>
                        <div className={"sad-emoji-container"}>
                            <img src={"sad-emoji.svg"} alt={"sad-Emoji"}/>
                        </div>
                        <div className={"header-reinstall-container"}>
                            WE ARE SO GRATEFUL FOR YOUR ANSWER
                        </div>
                        <div className={"description-txt-reinstall"}>
                            To be honest, we don't want to lose you
                        </div>
                        <div className={"btn-reinstall-container"}>
                            <ReinstallButton/>
                        </div>
                    </div>
                </InnerLayout>
            </div>
        </div>
            <div className={"footer-container-reinstall"}>
                <Footer/>
            </div>
        </div>
    )
}
