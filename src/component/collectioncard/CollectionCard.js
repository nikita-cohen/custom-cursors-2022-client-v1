import "./CollectionCard.css";
import {ViewCollectionButton} from "../viewcollectionbutton/ViewCollectionButton";

export function CollectionCard(props) {
    return (
        <div className="collection-card-container">
            <div className="img-collection-card-container">
                <img src="collection-image.png" alt="collection"/>
            </div>
            <div className="collection-name-txt-container">
                <div className="collection-name-txt">
                    The Most Popular Cursors
                </div>
            </div>
            <div className="view-btn-collection-card">
                <ViewCollectionButton/>
            </div>
        </div>
    )
}