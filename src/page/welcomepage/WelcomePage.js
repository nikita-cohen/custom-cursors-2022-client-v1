import "./WelcomePage.css";
import {ActionBar} from "../../component/actionbar/ActionBar";
import InnerLayout from "../../component/innerlayout/InnerLayout";
import {SeeAllCollectionButton} from "../../component/seeallcollectionbutton/SeeAllCollectionButton";
import {CursorCard} from "../../component/cursorcard/CursorCard";
import {GetMoreCursorsButton} from "../../component/getmorecursorsbutton/GetMoreCursorsButton";
import {Footer} from "../../component/footer/Footer";


export function WelcomePage(props) {
    return (
        <div className="main-welcome-page-container">
            <ActionBar type={"IMAGE"} />
            <InnerLayout>
                <div className="first-element-container">
                    <div className="txt-header-container">
                        <div className="txt-header">
                            THANK YOU FOR CHOOSING
                        </div>
                        <div className="txt-header">
                            CUSTOM CURSORS!
                        </div>
                        <div >
                            <div className="description-txt">
                                This Chrome extension can change your regular mouse pointer
                            </div>
                            <div className="description-txt">
                                to a fun, custom cursor.
                            </div>
                            <br/>
                            <div className="description-txt">
                                Open the extension window and click on any cursor you like,
                            </div>
                            <div className="description-txt">
                                then move your mouse to this page and click on check area.
                            </div>
                            <br/>
                            <div className="description-txt">
                                Due to Google policy restrictions extensions cannot change
                            </div>
                            <div className="description-txt">
                                cursor on Chrome Web Store, inner pages and Homepage.
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
                        <CursorCard/>
                        <CursorCard/>
                        <CursorCard/>
                        <CursorCard/>
                        <CursorCard/>
                        <CursorCard/>
                        <CursorCard/>
                        <CursorCard/>
                        <CursorCard/>
                        <CursorCard/>
                    </div>
                    <div className={"more-cursors-btn-container"}>
                        <GetMoreCursorsButton/>
                    </div>
                </InnerLayout>
                <div className={"footer-container-welcome-page"}>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}