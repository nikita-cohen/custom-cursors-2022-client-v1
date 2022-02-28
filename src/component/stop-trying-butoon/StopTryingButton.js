import "./StopTryingButton.css";
import {useEffect, useState} from "react";

export function StopTryingButton(props) {

    const [cursorUrl, setCursorUrl] = useState("")
    const [pointerUrl, setPointerUrl] = useState("")


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
        resizeDataURL(props.cursor, 48, 48, "cursor").then(r => {
            setCursorUrl(r.data)
        })

        resizeDataURL(props.pointer, 48, 48, "cursor").then(r => {
            setPointerUrl(r.data)
        })

    }, [])


    const btnType = () => {
        if (props.type === "stop"){
            return (<div onClick={() => props.getPath("", "", null, "stop")}  className="stop-trying-btn">
                       <p className="stop-trying-txt">Stop trying</p>
                   </div>)
        } else if (props.type === "try"){
            return (<div onClick={() => props.getPath(cursorUrl, pointerUrl, props.cursorId, "try")}  className="stop-trying-btn" style={{backgroundColor: "#197DE1"}}>
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
