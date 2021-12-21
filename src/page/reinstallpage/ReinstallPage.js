import "./ReinstallPage.css"
import {ActionBar} from "../../component/actionbar/ActionBar";
import InnerLayout from "../../component/innerlayout/InnerLayout";
import {ReinstallButton} from "../../component/reinstallbutton/ReinstallButton";
import {Footer} from "../../component/footer/Footer";

export function ReinstallPage(props) {
    return(
        <div>
            <ActionBar type={"IMAGE"}/>
            <div className={"reinstall-page-container"}>
                <InnerLayout>
                    <div className={"container-inner-reinstall-page"}>
                        <div className={"sad-emoji-container"}>
                            <img src={"sad-emoji.svg"} alt={"sad-Emoji"}/>
                        </div>
                        <div className={"header-reinstall-container"}>
                            we are  so grateful for your answer
                        </div>
                        <div className={"description-txt-reinstall"}>
                            To be honest, we don't want to lose you
                        </div>
                        <div className={"btn-reinstall-container"}>
                            <ReinstallButton/>
                        </div>
                    </div>
                </InnerLayout>
                <div className={"footer-container-reinstall"}>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}