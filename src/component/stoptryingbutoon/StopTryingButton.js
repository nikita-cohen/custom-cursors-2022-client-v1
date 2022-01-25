import "./StopTryingButton.css";
import {useEffect, useState} from "react";

export function StopTryingButton(props) {

    const [type, setType] = useState(props.type);
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

    props.setPath(cursorUrl, pointerUrl);

    const onClickBtn = () => {
        if (type === "stop"){
            props.onTry("stop")
            setType("try")
        } else if (type === "try"){
            props.onTry("try")
            if (props.trying === false){
                setType("stop")
            }
        }
    }

    const btnType = () => {
        if (type === "stop"){
            return (<div onClick={onClickBtn} className="stop-trying-btn">
                       <p className="stop-trying-txt">Stop trying</p>
                   </div>)
        } else if (type === "try"){
            return (<div onClick={onClickBtn} className="stop-trying-btn" style={{backgroundColor: "#197DE1"}}>
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