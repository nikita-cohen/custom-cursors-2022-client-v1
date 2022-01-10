import "./CursorCard.css";
import {AddButton} from "../addbutton/AddButton";
import {StopTryingButton} from "../stoptryingbutoon/StopTryingButton";

export function CursorCard(props) {

    return(
        <div className="card-container">
            <div className="cursor-name-txt-container">
                <div className="cursor-name-txt">
                    Курсор Аватар: Легенда о Корре Корра
                </div>
            </div>
            <div className="img-card-container">
                <img className={"image-collection-cursor-card"} src="https://cdn.custom-cursor.com/packs/5634/medium/avatar-korra-pack.png" alt="cursor"/>
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