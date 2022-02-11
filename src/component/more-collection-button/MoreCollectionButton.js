import "./MoreCollectionButton.css";

export function MoreCollectionButton(props) {
    return (
        <div onClick={props.moreCursor} className="get-button-container-more-collection">
            <div className="get-txt-style-more-collection">More Collections</div>
        </div>
    )
}