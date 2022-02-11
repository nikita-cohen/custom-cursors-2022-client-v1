import "./GetMoreCursorsButton.css";

export function GetMoreCursorsButton(props) {
    return (
        <div onClick={() => props.moreCursors()} className="get-button-container">
            <div className="get-txt-style">Get More cursors</div>
        </div>
    )
}