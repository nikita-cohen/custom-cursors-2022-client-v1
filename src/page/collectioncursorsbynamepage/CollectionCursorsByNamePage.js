import {ActionBar} from "../../component/actionbar/ActionBar";
import InnerLayout from "../../component/innerlayout/InnerLayout";
import "./CollectionCursorsByNamePage.css"
import {CursorCard} from "../../component/cursorcard/CursorCard";
import {ToAllCollectionButton} from "../../component/toallcollectionsbutton/ToAllCollectionButton";
import {Footer} from "../../component/footer/Footer";
import {getCollectionCursorsAxios, getUserCollectionAxios} from "../../redux/action";
import connect from "react-redux/lib/connect/connect";
import {useEffect, useState} from "react";
import {DoNotHaveExtension} from "../../component/donothaveextension/DoNotHaveExtension";
import {Rings} from "react-loader-spinner";
import {usePromiseTracker} from "react-promise-tracker";
import axios from "axios";


export function CollectionCursorsByNamePage(props) {

    const [userId, setUserId] = useState(props.userIdWelcome);
    const [tryAddCursor, setTryAddCursor] = useState("none");
    const [tryAddCursorIfNoExtension, setTryAddCursorIfNoExtension] = useState("none");
    const [trying, setTrying] = useState(false)
    const { promiseInProgress } = usePromiseTracker();

    useEffect(() => {
        props.getCollectionCursorsAxios(props.match.params.id)

        if (props.userIdWelcome !== null){
            props.getUserCollectionAxios(props.userIdWelcome)
        }

        setTimeout(() => {
            if (props.userIdWelcome === null) {
                setUserId("NO/EXTENSION")
            }
        }, 2000)

    },[props.userIdWelcome])

    const closeInstallCollection = () => {
        setTryAddCursorIfNoExtension("none")
    }

    const addCursor = async (cursorID) => {
      if (props.userIdWelcome === null) {
          setTryAddCursorIfNoExtension("flex")
      } else if (userId === "") {
          alert("Something Go Wrong Please Try Again")
      } else {
          const obj =
              {
                  "userId" : props.userIdWelcome,
                  "collectionId" : props.match.params.id,
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
        return props.cursors.map((cursor, index) => {
            let curCursor = props.userIdWelcome !== null && props.userIdWelcome !== undefined  ? props.userCollection?.find(item => item.id === cursor.id ? item : undefined) : false;
            if (curCursor) {
                return <CursorCard key={index} addCursor={addCursor} add="SUCCEED" cursorId={cursor.id} cursorName={cursor.name}  changeTrying={changeTryingState} trying={trying}  cursor={cursor.cursorPath} pointer={cursor.pointerPath} imageUrl={cursor.image}/>
            } else {
                return <CursorCard key={index} addCursor={addCursor} add="ADD" cursorId={cursor.id} cursorName={cursor.name}  changeTrying={changeTryingState} trying={trying}  cursor={cursor.cursorPath} pointer={cursor.pointerPath} imageUrl={cursor.image}/>
            }
        })
    }

    return (promiseInProgress || userId === null || userId === undefined ? <div className={"spinner"}><Rings color={"#006EDD"}/></div> :
        <div className={"body-container-collection-cursors"}>
            <div className={"uninstall"} style={{display : tryAddCursorIfNoExtension}}>
                <div className={"install-now"}>
                    <DoNotHaveExtension closePopUp={closeInstallCollection}/>
                </div>
            </div>
        <div className={"main-collection-cursor-page-container"}>
            <ActionBar type={"IMAGE"} addCursor={tryAddCursor} changePopUp={changePopupSuccessVisibility}/>
            <div className={"view-container"}>
                <InnerLayout>
                    <div className={"main-header-txt-container-by-name"}>
                        <div className={"txt-by-name"}>
                            {props.cursors[0]? props.cursors[0].collectionName : ""}
                        </div>
                    </div>
                    <div className={"card-container-by-name"}>
                        {showCursors()}
                    </div>
                    <div className={"btn-to-all-by-name-container"}>
                        <ToAllCollectionButton/>
                    </div>
                </InnerLayout>

            </div>
        </div>
            <div className={"footer-by-name-container"}>
                <Footer/>
            </div>
        </div>
    )
}

const mapStateToProp = (state) => {
    return {
        cursors : state.cursors,
        userCollection : state.userCollection,
        userIdWelcome : state.userId
    };
};

const mapDispatchActions = () => {
    return {
        getCollectionCursorsAxios,
        getUserCollectionAxios,
    };
};
export const CollectionCursorsByNamePageConnected = connect(mapStateToProp, mapDispatchActions())(CollectionCursorsByNamePage);
