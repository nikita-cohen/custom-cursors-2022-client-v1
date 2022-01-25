import "./WelcomePage.css";
import {ActionBar} from "../../component/actionbar/ActionBar";
import InnerLayout from "../../component/innerlayout/InnerLayout";
import {SeeAllCollectionButton} from "../../component/seeallcollectionbutton/SeeAllCollectionButton";
import {CursorCard} from "../../component/cursorcard/CursorCard";
import {GetMoreCursorsButton} from "../../component/getmorecursorsbutton/GetMoreCursorsButton";
import {Footer} from "../../component/footer/Footer";
import {useEffect, useState} from "react";
import {getCollectionCursorsAxios, getUserCollectionAxios} from "../../redux/action";
import connect from "react-redux/lib/connect/connect";
import axios from "axios";
import {DoNotHaveExtension} from "../../component/donothaveextension/DoNotHaveExtension";
import {usePromiseTracker} from "react-promise-tracker";
import {Rings} from "react-loader-spinner";


export function WelcomePage(props) {

    const [trying, setTrying] = useState(false)
    const [userId, setUserId] = useState("");
    const [tryAddCursor, setTryAddCursor] = useState("none");
    const [tryAddCursorIfNoExtension, setTryAddCursorIfNoExtension] = useState("none");
    const { promiseInProgress } = usePromiseTracker();
    const [numOfCollections, setNumOfCollections] = useState(15);


    useEffect(() => {
        props.getCollectionCursorsAxios("61f0107fdf02797036b0807d")
        setTimeout(() => {
            window.postMessage({ type: "FROM_PAGE", text: "Hello from the webpage!" }, "*");
        },50)

        window.addEventListener('message', (event) => {
            if (event.data.type && (event.data.type === "FROM_EXTENSION")){
                props.getUserCollectionAxios(event.data.user_id_cursors);
                setUserId(event.data.user_id_cursors)
            }
        })

        setTimeout(() => {
            if (userId === "") {
                setUserId("NO/EXTENSION")
            }
        },50)
    },[])

    const moreCursors = () => {
        if (numOfCollections < 30) {
            setNumOfCollections(numOfCollections + 15)
        }
    }

    const closeInstallCollection = () => {
        setTryAddCursorIfNoExtension("none")
    }

    const addCursor = async (cursorID) => {
        if (userId === "NO/EXTENSION") {
            setTryAddCursorIfNoExtension("flex")
        } else if (userId === "") {
            alert("Something Go Wrong Please Try Again")
        } else {
            const obj =
                {
                    "userId" : userId,
                    "collectionId" : "61f0107fdf02797036b0807d",
                    "cursorId" : cursorID
                };
            const response = await axios.post("https://mycustomcursors.online/node/cursor", obj);
            if (response.data === "updated") {
                setTryAddCursor("flex");
                return "added"
            } else {
                alert("Something Go Wrong Please Try Again")
            }
        }
    }

    const changePopupSuccessVisibility = () => {
        setTryAddCursor("none")
    }

    function changeTryingState(state){
        setTrying(state)
    }


    const showCursors = () => {
        return props.cursors.slice(0 , numOfCollections).map((cursor, index) => {
            let curCursor = userId !== "" && userId !== "NO/EXTENSION" ? props.userCollection?.find(item => item.id === cursor.id ? item : undefined) : false;
            if (curCursor) {
                return <CursorCard key={index} addCursor={addCursor} add="SUCCEED" cursorId={cursor.id} cursorName={cursor.name}  changeTrying={changeTryingState} trying={trying}  cursor={cursor.cursorPath} pointer={cursor.pointerPath} imageUrl={cursor.image}/>
            } else {
                return <CursorCard key={index} addCursor={addCursor} add="ADD" cursorId={cursor.id} cursorName={cursor.name}  changeTrying={changeTryingState} trying={trying}  cursor={cursor.cursorPath} pointer={cursor.pointerPath} imageUrl={cursor.image}/>
            }
        })
    }

    return (
        <div className={"body-container"}>
            <div className={"uninstall-welcome"} style={{display : tryAddCursorIfNoExtension}}>
                <div className={"install-now-welcome"}>
                    <DoNotHaveExtension closePopUp={closeInstallCollection}/>
                </div>
            </div>
            <div className="main-welcome-page-container">
                <ActionBar type={"IMAGE"} addCursor={tryAddCursor} changePopUp={changePopupSuccessVisibility}/>
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
                            {promiseInProgress ? <div className={"spinner"}><Rings color={"#006EDD"}/></div> : showCursors()}
                        </div>
                        <div className={"more-cursors-btn-container"}>
                            <GetMoreCursorsButton moreCursors={moreCursors}/>
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
        cursors : state.cursors,
        userCollection : state.userCollection
    };
};

const mapDispatchActions = () => {
    return {
        getCollectionCursorsAxios,
        getUserCollectionAxios,
    };
};
export const WelcomePageConnected = connect(mapStateToProp, mapDispatchActions())(WelcomePage);
