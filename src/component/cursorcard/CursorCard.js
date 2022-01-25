import "./CursorCard.css";
import {AddButton} from "../addbutton/AddButton";
import {StopTryingButton} from "../stoptryingbutoon/StopTryingButton";
import {useEffect, useState} from "react";

export function CursorCard(props) {

    const [trying, setTrying] = useState(false)
    const [cursor, setCursor] = useState("")
    const [pointer, setPointer] = useState("");

    function getStyle(element, property) {
        return (getComputedStyle(element, null).getPropertyValue(property));
    }

    function changePointer() {
        let styleSheet = document.createElement('style');

        styleSheet.type = 'text/css';
        styleSheet.rel = 'stylesheet';

        styleSheet.innerHTML =  `a,  button, .pointer-hover {\n  cursor: url('${pointer}') 0 0, pointer !important;\n        }\n `;

        document.head.appendChild(styleSheet);
    }

    function changeCursor() {
        let styleSheet = document.createElement('style');

        styleSheet.type = 'text/css';
        styleSheet.rel = 'stylesheet';

        styleSheet.innerHTML =  `.cursor-hover {\n  cursor: url('${cursor}') 0 0, pointer !important;\n        }\n `;

        document.head.appendChild(styleSheet);
    }

    function disablePointer(){
        let styleSheet = document.createElement('style');

        styleSheet.type = 'text/css';
        styleSheet.rel = 'stylesheet';

        styleSheet.innerHTML =  `a, button, .pointer-hover {\n  cursor: pointer !important;\n        }\n `;
        document.head.appendChild(styleSheet);
    }

    function disableCursor(){
        let styleSheet = document.createElement('style');

        styleSheet.type = 'text/css';
        styleSheet.rel = 'stylesheet';

        styleSheet.innerHTML =  `a, button, .cursor-hover {\n  cursor: default !important;\n        }\n `;
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


    const getPath = (cursorPath, pointerPath) => {
        setCursor(cursorPath);
        setPointer(pointerPath);
    }

    const onTry = (type) => {
        if (type === "try"){
            if (props.trying === false) {
                setTrying(true)
                props.changeTrying(true)
                changePointer()
                changeCursor()
            } else {
                alert("you already trying another cursor")
            }
        } else {
            setTrying(false)
            props.changeTrying(false)
            disableCursor()
            disablePointer()
        }
    }

    return(
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
                <AddButton addCursor={props.addCursor} cursorId={props.cursorId} type={props.add}/>
            </div>
            <div className="add-button-card">
                <StopTryingButton trying={props.trying} setPath={getPath} cursor={props.cursor} onTry={onTry} pointer={props.pointer} getPath={props.getPath}  type={"try"}/>
            </div>
            </div>
        </div>
    )
}