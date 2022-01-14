import "./CursorCard.css";
import {AddButton} from "../addbutton/AddButton";
import {StopTryingButton} from "../stoptryingbutoon/StopTryingButton";

export function CursorCard(props) {

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
                <AddButton type="ADD"/>
            </div>
            <div className="add-button-card">
                <StopTryingButton onTry={props.onTry} type="try"/>
            </div>
            </div>
        </div>
    )
}