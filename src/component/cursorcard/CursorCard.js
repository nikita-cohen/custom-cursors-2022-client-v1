import "./CursorCard.css";
import {AddButton} from "../addbutton/AddButton";
import {StopTryingButton} from "../stoptryingbutoon/StopTryingButton";

export function CursorCard(props) {
    return(
        <div className="card-container">
            <div className="cursor-name-txt-container">
                <div className="cursor-name-txt">
                    Friday Night Funkin' Red Impostor Cursor
                </div>
            </div>
            <div className="img-card-container">
                <img src="cursor.png" alt="cursor"/>
            </div>
            <div className="button-container">
            <div>
                <AddButton type="ADD"/>
            </div>
            <div className="add-button-card">
                <StopTryingButton type="try"/>
            </div>
            </div>
        </div>
    )
}