import "./WelcomePage.css";
import {ActionBar} from "../../component/actionbar/ActionBar";
import {Footer} from "../../component/footer/Footer";
import {SeeAllCollectionButton} from "../../component/seeallcollectionbutton/SeeAllCollectionButton";
import {CursorCard} from "../../component/cursorcard/CursorCard";


export function WelcomePage(props) {
    return (
        <div className="main-welcome-page-container">
            <div>
                <ActionBar/>
            </div>
            <div className="size-first-row">
            <div className="first-row">
            <div className="main-welcome-page-txt">
                <div className="header-txt">THANK YOU FOR CHOOSING CUSTOM CURSORS!</div>
                <div className="main-txt-container">
                <div className="main-header-txt">
                    This Chrome extension can change your regular mouse pointer to a fun, custom cursor.
                </div>
                <br/>
                <div className="main-header-txt">
                    Open the extension window and click on any cursor you like, then move your mouse to this page and click on check area.
                </div>
                    <br/>
                <div className="main-header-txt">
                    Due to Google policy restrictions extensions cannot change cursor on Chrome Web Store, inner pages and Homepage.
                </div>
                    <br/>
                <div className="main-header-txt">
                    Please reload your browser tabs after selecting a cursor.
                </div>
                </div>
            </div>
                <div>

                </div>
                <div className="image-welcome-page-container">
                    <div className="image-welcome-page-txt-container">
                        <div className="image-welcome-page-txt">
                            Гифка демонстрирующая как курсоры добавляются в расширение
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="card-view-container">
                <div className="card-view-inside">
                <div className="card-view-size">
                    <div className="header-view-txt">
                        Top cursors
                        <div className="under-header-view-txt">
                            Most recently added cursors
                        </div>
                    </div>
                    <div>
                        <SeeAllCollectionButton/>
                    </div>
                </div>
                    <div>
                        <CursorCard/>
                    </div>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}