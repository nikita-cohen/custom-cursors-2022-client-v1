import "./CursorCard.css";
import {AddButton} from "../add-button/AddButton";
import {StopTryingButton} from "../stop-trying-butoon/StopTryingButton";
import {useEffect, useState} from "react";

export function CursorCard(props) {
    const [isActive, setIsActive] = useState(props.cursorId === props.activeCursor);
    const [isAdded, setIsAdded] = useState(false);
    const [urls , setUrls] = useState(props.urls);

    useEffect(() => {
        setIsActive(props.cursorId === props.activeCursor)
        setUrls(props.urls)
        if (props.add !== "ADD") {
            setIsAdded(true);
        }
    },[props.activeCursor, props.add, props.urls])

    return (
        <div className="card-container">
            <div className="cursor-name-txt-container">
                <div className="cursor-name-txt">
                    {props.cursorName}
                </div>
            </div>
            <div className="img-card-container">
                <img className={"image-collection-cursor-card"} src={props.imageUrl} alt="cursor"/>
            </div>
            <div className="button-container">
                <div>
                    <AddButton setAdd={setIsAdded} addCursor={props.addCursor} cursorId={props.cursorId} type={props.add}/>
                </div>
                <div className="add-button-card">
                    <StopTryingButton urls={urls} setAdded={isAdded} ifAdd={props.add} cursorId={props.cursorId} cursor={props.cursor} pointer={props.pointer}
                                      getPath={props.getPath} type={isActive? "stop" : "try"}/>
                </div>
            </div>
        </div>
    )
}
