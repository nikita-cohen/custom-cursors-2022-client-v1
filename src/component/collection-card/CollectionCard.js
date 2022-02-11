import "./CollectionCard.css";
import {ViewCollectionButton} from "../view-collection-button/ViewCollectionButton";
import {useHistory} from "react-router-dom";

export function CollectionCard(props) {
    const history = useHistory();

    return (
        <a href={`/collection-cursors/${props.itemId}`} onClick={() => history.push(`/collection-cursors/${props.itemId}`)} className="collection-card-container">
            <div className="img-collection-card-container">
                <img className={"image-size-collection-card"} src={props.image} alt="collection"/>
            </div>
            <div className="collection-name-txt-container">
                <div className="collection-name-txt">
                    {props.text}
                </div>
            </div>
            <div className="view-btn-collection-card">
                <ViewCollectionButton collectionName={props.text} collectionId={props.itemId}/>
            </div>
        </a>
    )
}
