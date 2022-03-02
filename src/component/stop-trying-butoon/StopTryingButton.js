import "./StopTryingButton.css";
import {useEffect, useState} from "react";

export function StopTryingButton(props) {

    const [cursorUrl, setCursorUrl] = useState("")
    const [pointerUrl, setPointerUrl] = useState("")
    const [isCursor, setIsCursor] = useState("pointer")
    const [isSubscribe, setIsSubscribe] = useState(true);

    const resizeDataURL = (data, wantedWidth, wantedHeight, type) => new Promise(function (resolve, reject) {
        let img = document.createElement('img');
        img.onload = function () {
            let canvas = document.createElement('canvas');
            let ctx = canvas.getContext('2d');
            canvas.width = wantedWidth;
            canvas.height = wantedHeight;
            ctx.drawImage(img, 0, 0, wantedWidth, wantedHeight);
            resolve({type: type, data: canvas.toDataURL('image/png', 1)});
            img = null;
            canvas = null;
        };

        img.crossOrigin = "anonymous";
        img.src = data;

    });

    useEffect(() => {
        setIsSubscribe(true);
        resizeDataURL(props.cursor, 48, 48, "cursor").then(r => {
            if (isSubscribe){
                setCursorUrl(r.data)
            }

        })

        resizeDataURL(props.pointer, 48, 48, "cursor").then(r => {
            if (isSubscribe){
                setPointerUrl(r.data)
            }

        })

        if (props.setAdded) {
            setIsCursor('default')
        }
        return () => {
            setIsSubscribe(false)
            // break async loading
        }
    }, [props.setAdded])

    function checkIfOnClickEnable () {
        if (props.ifAdd === "ADD" && !props.setAdded) {
            setIsCursor('pointer')
            props.getPath(cursorUrl, pointerUrl, props.cursorId, "try")
        }
    }

    const btnType = () => {
        if (props.type === "stop"){
            return (<div onClick={() => props.getPath(props.urls.urlCursor, props.urls.urlPointer, null, "stop")}  className="stop-trying-btn">
                       <p className="stop-trying-txt">Stop trying</p>
                   </div>)
        } else if (props.type === "try"){
            return (<div onClick={() => checkIfOnClickEnable()}   className="stop-trying-btn" style={{backgroundColor: "#197DE1", cursor : isCursor}}>
                       <p className="stop-trying-txt">Try cursor</p>
                   </div>)
        }
    }

    return(
        <div>
            {btnType()}
        </div>

    )
}
