import "./ViewCollectionButton.css";
import {useHistory} from "react-router-dom";

export function ViewCollectionButton(props) {

    const history = useHistory();

    return (
        <a href={`/collection-cursors/${props.collectionId}`} onClick={() => history.push(`/collection-cursors/${props.collectionId}`)} className="view-collection-btn-container">
            <div className="view-collection-txt">
                View the Collection
            </div>
        </a>
    )
}
