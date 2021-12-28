import "./ViewCollectionButton.css";
import {useHistory} from "react-router-dom";

export function ViewCollectionButton(props) {

    const history = useHistory();

    return (
        <div onClick={() => history.push("collection-cursors")} className="view-collection-btn-container">
            <div className="view-collection-txt">
                View the Collection
            </div>
        </div>
    )
}