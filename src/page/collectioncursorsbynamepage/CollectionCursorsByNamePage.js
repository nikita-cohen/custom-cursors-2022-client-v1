import {ActionBar} from "../../component/actionbar/ActionBar";
import InnerLayout from "../../component/innerlayout/InnerLayout";
import "./CollectionCursorsByNamePage.css"
import {CursorCard} from "../../component/cursorcard/CursorCard";
import {ToAllCollectionButton} from "../../component/toallcollectionsbutton/ToAllCollectionButton";
import {Footer} from "../../component/footer/Footer";
import { getCollectionCursorsAxios} from "../../redux/action";
import connect from "react-redux/lib/connect/connect";
import {useEffect, useState} from "react";

export function CollectionCursorsByNamePage(props) {

    useEffect(() => {
        props.getCollectionCursorsAxios(props.match.params.id)

    },[])

    const [trying, setTrying] = useState(false)


    function changeTryingState(state){
        setTrying(state)
    }

    const showCursors = () => {
        return props.cursors.map(cursor =>
            <CursorCard cursorName={cursor.name}  changeTrying={changeTryingState} trying={trying}  cursor={cursor.cursorPath} pointer={cursor.pointerPath} imageUrl={cursor.image}/>)

    }


    return (
        <div className={"body-container-collection-cursors"}>
        <div className={"main-collection-cursor-page-container"}>
            <ActionBar type={"IMAGE"}/>
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
        cursors : state.cursors
    };
};

const mapDispatchActions = () => {
    return {
        getCollectionCursorsAxios
    };
};
export const CollectionCursorsByNamePageConnected = connect(mapStateToProp, mapDispatchActions())(CollectionCursorsByNamePage);
