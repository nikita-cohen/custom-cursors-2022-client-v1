import "./WelcomePage.css";
import {ActionBar} from "../../component/actionbar/ActionBar";


export function WelcomePage(props) {
    return (
        <div className="container-fluid">
            <div className="row">
                <ActionBar/>
            </div>
            <div className="row row-sizing-top">
                    <div className="col-4 txt-row-header-container">
                        <div className="txt-row-header">
                            THANK YOU FOR CHOOSING CUSTOM CURSORS!
                        </div>
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
                    <div className="col-4">
                        <div className="image-container-welcome-page">

                        </div>
                    </div>
            </div>
        </div>
    )
}