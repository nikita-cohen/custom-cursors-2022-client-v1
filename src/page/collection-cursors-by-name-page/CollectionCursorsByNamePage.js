import {ActionBar} from "../../component/action-bar/ActionBar";
import InnerLayout from "../../component/inner-layout/InnerLayout";
import "./CollectionCursorsByNamePage.css"
import {CursorCard} from "../../component/cursor-card/CursorCard";
import {ToAllCollectionButton} from "../../component/to-all-collections-button/ToAllCollectionButton";
import {Footer} from "../../component/footer/Footer";
import {getCollectionCursorsAxios, getURL, getUserCollectionAxios} from "../../redux/action";
import connect from "react-redux/lib/connect/connect";
import {useEffect, useState} from "react";
import {DoNotHaveExtension} from "../../component/do-not-have-extension/DoNotHaveExtension";
import {Rings} from "react-loader-spinner";
import {usePromiseTracker} from "react-promise-tracker";
import axios from "axios";
import {useStore} from "react-redux/lib/hooks/useStore";


export function CollectionCursorsByNamePage(props) {

    const [userId, setUserId] = useState(props.userIdWelcome);
    const [tryAddCursor, setTryAddCursor] = useState("none");
    const [tryAddCursorIfNoExtension, setTryAddCursorIfNoExtension] = useState("none");
    const [tryingId, setTryingId] = useState("");
    const [cursorUrl, setCursorsUrl] = useState({});
    const { promiseInProgress } = usePromiseTracker();
    const store = useStore();

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

        setTimeout(() => {
            window.postMessage({ type: "FROM_PAGE_CURSOR", text: "getCursor" }, "*");
        }, 500)

        window.addEventListener('message', (event) => {
            if (event.data.type && (event.data.type === "FROM_EXTENSION_CURSOR")){
                setCursorsUrl(event.data.url);
                props.getURL(event.data.url)
            }
        })

    },[props.userIdWelcome, props.match.params.id])



    useEffect(() => {
        return () => {
            changeCursor(store.getState().url.urlCursor)
            changePointer(store.getState().url.urlPointer)
        };
    }, []);

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



    function getStyle(element, property) {
        return (getComputedStyle(element, null).getPropertyValue(property));
    }

    function changePointer(url) {
        let styleSheet = document.createElement('style');

        styleSheet.type = 'text/css';
        styleSheet.rel = 'stylesheet';

        styleSheet.innerHTML =  `a,  button, .pointer-hover {\n  cursor: url('${url}') 0 0, pointer !important;\n        }\n `;

        document.head.appendChild(styleSheet);
    }

    function changeCursor(url) {
        let styleSheet = document.createElement('style');

        styleSheet.type = 'text/css';
        styleSheet.rel = 'stylesheet';

        styleSheet.innerHTML =  `.cursor-hover {\n  cursor: url('${url}') 0 0, default !important;\n        }\n `;

        document.head.appendChild(styleSheet);
    }



    document.body.addEventListener('mouseover', event => {
        let pointer = getStyle(event.target, 'cursor');
        if (pointer === 'pointer'){
            event.target.classList.add("pointer-hover");
        } else if (pointer === "default" || pointer === "auto") {
            event.target.classList.add("cursor-hover");
        }
    })


    const getPath = (cursorPath, pointerPath, id ,type) => {
        if (type !== "stop") {
            if (props.userIdWelcome === null) {
                setTryAddCursorIfNoExtension("flex")
            }
        }
        changeCursor(cursorPath)
        changePointer(pointerPath)
        setTryingId(id);
    }


    const showCursors = () => {
        return props.cursors.map((cursor) => {
            let curCursor = props.userIdWelcome !== null && props.userIdWelcome !== undefined  ? props.userCollection?.find(item => item.id === cursor.id ? item : undefined) : false;
            if (curCursor) {
                return <CursorCard key={cursor.id} urls={cursorUrl} activeCursor={tryingId} addCursor={addCursor} add="SUCCEED" getPath={getPath} cursorId={cursor.id} cursorName={cursor.name}  cursor={cursor.cursorPath} pointer={cursor.pointerPath} imageUrl={cursor.image}/>
            } else {
                return <CursorCard key={cursor.id} urls={cursorUrl} activeCursor={tryingId}  addCursor={addCursor} add="ADD" getPath={getPath} cursorId={cursor.id} cursorName={cursor.name}  cursor={cursor.cursorPath} pointer={cursor.pointerPath} imageUrl={cursor.image}/>
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
        userIdWelcome : state.userId,
        url : state.url
    };
};

const mapDispatchActions = () => {
    return {
        getCollectionCursorsAxios,
        getUserCollectionAxios,
        getURL
    };
};
export const CollectionCursorsByNamePageConnected = connect(mapStateToProp, mapDispatchActions())(CollectionCursorsByNamePage);
