import "./WelcomePage.css";
import {ActionBar} from "../../component/actionbar/ActionBar";
import InnerLayout from "../../component/innerlayout/InnerLayout";
import {SeeAllCollectionButton} from "../../component/seeallcollectionbutton/SeeAllCollectionButton";
import {CursorCard} from "../../component/cursorcard/CursorCard";
import {GetMoreCursorsButton} from "../../component/getmorecursorsbutton/GetMoreCursorsButton";
import {Footer} from "../../component/footer/Footer";
import {useEffect, useState} from "react";
import {getCollectionCursorsAxios} from "../../redux/action";
import connect from "react-redux/lib/connect/connect";


export function WelcomePage(props) {



    useEffect(() => {
        props.getCollectionCursorsAxios("61e147c4f63ebb2f8d484041")
    },[])

    const getMoreCursor = () => {

    }


    const showCursors = () => {
        return props.cursors.map(cursor =>
            <CursorCard cursorName={cursor.name} imageUrl={cursor.image} onTry={onTryCursor}/>)

    }

    const cursor = "https://cdn.custom-cursor.com/db/cursor/pointer_342.png";
    const pointer = "https://cdn.custom-cursor.com/db/pointer/pointer_341.png";


    function getStyle(element, property) {
        return (getComputedStyle(element, null).getPropertyValue(property));
    }

    function onCursorPointerChange(event) {
        let pointer = getStyle(event.target, 'cursor');
        if (pointer === 'pointer') {
            event.target.classList.add("cursor-hover");
        }
    }

    function changePointer() {
        let styleSheet = document.createElement('style');
        styleSheet.type = 'text/css';
        styleSheet.rel = 'stylesheet';
        styleSheet.innerHTML = `a,  button, .cursor-hover {\n  cursor: url('${pointer}') 0 0, pointer !important;\n        }\n `;
        document.head.appendChild(styleSheet);
    }


    function disablePointer() {
        let styleSheet = document.createElement('style');

        styleSheet.type = 'text/css';
        styleSheet.rel = 'stylesheet';

        styleSheet.innerHTML = `a, button, .cursor-hover {\n  cursor: pointer !important;\n        }\n `;
        document.head.appendChild(styleSheet);
    }

    function onTryCursor(type) {
        if (type === "stop") {
            changePointer()
            document.getElementsByTagName("body")[0].style.cursor = `url('${cursor}'), default`
        } else {
            disablePointer()
            document.getElementsByTagName("body")[0].style.cursor = "default";
        }
    }

    document.body.addEventListener('mouseover', onCursorPointerChange)

    return (
        <div className={"body-container"}>
            <div className="main-welcome-page-container">
                <ActionBar type={"IMAGE"}/>
                <div className={"inner-layout-parent"}>
                    <InnerLayout>
                        <div className="first-element-container">
                            <div className="txt-header-container">
                                <div className="txt-header">
                                    THANK YOU FOR CHOOSING CUSTOM CURSORS!
                                </div>
                                <br/>
                                <div>
                                    <div className="description-txt">
                                        This Chrome extension can change your regular mouse pointer to a fun, custom cursor.
                                    </div>
                                    <br/>
                                    <div className="description-txt">
                                        Open the extension window and click on any cursor you like, then move your mouse to this page and click on check area.
                                    </div>
                                    <br/>
                                    <div className="description-txt">
                                        Due to Google policy restrictions extensions cannot change cursor on Chrome Web Store, inner pages and Homepage.
                                    </div>
                                    <br/>
                                    <div className="description-txt">
                                        Please reload your browser tabs after selecting a cursor.
                                    </div>
                                </div>
                            </div>
                            <div className="gif-container">
                                <div className="gif-txt">
                                    Гифка демонстрирующая как
                                </div>
                                <div className="gif-txt">
                                    курсоры добавляются в
                                </div>
                                <div className="gif-txt">
                                    расширение
                                </div>
                            </div>
                        </div>
                    </InnerLayout>
                </div>
                <div className="card-view-content">
                    <InnerLayout>
                        <div className="second-row-container">
                            <div className={"txt-container-second-row"}>
                                <div className="header-txt-second-row">
                                    Top cursors
                                </div>
                                <div className={"txt-description-second-row"}>
                                    Most recently added cursors
                                </div>
                            </div>
                            <div className={"btn-container"}>
                                <SeeAllCollectionButton/>
                            </div>
                        </div>
                        <div className={"card-container-second"}>
                            {showCursors()}
                        </div>
                        <div className={"more-cursors-btn-container"}>
                            <GetMoreCursorsButton getMore={getMoreCursor}/>
                        </div>
                    </InnerLayout>
                </div>
            </div>
            <div className={"footer-container-welcome-page"}>
                <Footer/>
            </div>
        </div>
    )
}

const mapStateToProp = (state) => {
    return {
        cursors : state.cursors
    };
};

const mapDispatchActions = () => {
    return {
        getCollectionCursorsAxios
    };
};
export const WelcomePageConnected = connect(mapStateToProp, mapDispatchActions())(WelcomePage);
