import "./CollectionCard.css";
import {ViewCollectionButton} from "../viewcollectionbutton/ViewCollectionButton";

export function CollectionCard(props) {
    return (
        <div className="collection-card-container">
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
        </div>
    )
}