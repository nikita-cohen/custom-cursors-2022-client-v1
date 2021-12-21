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
        {"id" : "1", "checked": false},
        {"id" : "2", "checked": false},
        {"id" : "3", "checked": false},
        {"id" : "4", "checked": false},
        {"id" : "5", "checked": false},
        {"id" : "6", checked: false}
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
        <div>
            <ActionBar type={"IMAGE"}/>
            <div className={"pool-page-container"}>
                <InnerLayout>
                    <div className={"image-container-pool"}>
                        <div className={"image-inner-container-pool"}>
                            <img src={"pool-emoji.svg"} alt={"emoji"}/>
                        </div>
                        <div className={"header-title-container-pool"}>
                            Help us improve
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
                            <div>
                                <SendFeedBackButton type={changeVisibility}/>
                            </div>
                        </div>
                    </div>
                </InnerLayout>
                <div className={"footer-pool-page"}>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}