import "./PoolPage.css"
import {ActionBar} from "../../component/actionbar/ActionBar";
import InnerLayout from "../../component/innerlayout/InnerLayout";
import {PoolCheckBox} from "../../component/poolcheckbox/PoolCheckBox";
import {TextAriaForPool} from "../../component/textariaforpool/TextAriaForPool";
import {SendFeedBackButton} from "../../component/sendfeedbackbutton/SendFeedBackButton";
import {Footer} from "../../component/footer/Footer";
import {useEffect, useState} from "react";

export function PoolPage(props) {

    const [changeVisibility, setChangeVisibility] = useState("INACTIVE");

    const [checkBoxes, setCheckBoxes] = useState([
        {"id" : "1", "checked": false, "message" : "It doesn’t have cursors, that I need"},
        {"id" : "2", "checked": false, "message" : "The extension isn’t convenient in using"},
        {"id" : "3", "checked": false, "message" : "It isn’t what I expected"},
        {"id" : "4", "checked": false, "message" : "It isn’t working properly"},
        {"id" : "5", "checked": false, "message" : "It has a negative effect on my browser"},
        {"id" : "6", "checked": false}
    ]);

    const onClickChangeVisibility = (id, type) => {
        let newState = checkBoxes.map(item => {
            if (id === item.id) {
                item.checked = type
            }

            return item;
        })

        let isVisible = newState.filter(item => item.checked).length > 0;
        if (isVisible) {
            setChangeVisibility("ACTIVE")
        } else {
            setChangeVisibility("INACTIVE")
        }

        setCheckBoxes(newState);
    }

    return (
        <div className={"body-container-pool-page"}>
        <div>
            <ActionBar type={"IMAGE"}/>
            <div className={"pool-page-container"}>
                <InnerLayout>
                    <div className={"image-container-pool"}>
                        <div className={"image-inner-container-pool"}>
                            <img src={"pool-emoji.svg"} alt={"emoji"}/>
                        </div>
                        <div className={"header-title-container-pool"}>
                            HELP US IMPROVE
                        </div>
                        <div className={"description-container-pool"}>
                            Why did you uninstall Custom Cursor? Check all that apply
                        </div>
                        <div className={"pool-check-bok-container-page"}>
                            <PoolCheckBox onClickChange={onClickChangeVisibility} idC={"1"} text={"It doesn’t have cursors, that I need"}/>
                            <div className={"margin-check-box"}>
                                <PoolCheckBox onClickChange={onClickChangeVisibility} idC={"2"} text={"The extension isn’t convenient in using"}/>
                            </div>
                            <div className={"margin-check-box"}>
                                <PoolCheckBox onClickChange={onClickChangeVisibility} idC={"3"} text={"It isn’t what I expected"}/>
                            </div>
                            <div className={"margin-check-box"}>
                                <PoolCheckBox onClickChange={onClickChangeVisibility}  idC={"4"} text={"It isn’t working properly"}/>
                            </div>
                            <div className={"margin-check-box"}>
                                <PoolCheckBox onClickChange={onClickChangeVisibility}  idC={"5"} text={"It has a negative effect on my browser"}/>
                            </div>
                            <div className={"margin-check-box"}>
                                <TextAriaForPool onClickChange={onClickChangeVisibility}  idC={"6"}/>
                            </div>
                            <div className={"margin-check-box"}>
                                <SendFeedBackButton type={changeVisibility}/>
                            </div>
                        </div>
                    </div>
                </InnerLayout>

            </div>
        </div>
            <div className={"footer-pool-page"}>
                <Footer/>
            </div>
        </div>
    )
}