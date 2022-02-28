import "./GetMoreCursorsButton.css";
import {useHistory} from "react-router-dom";

export function GetMoreCursorsButton(props) {
    const history = useHistory();
    return (
        <div onClick={() => history.push('/cursor-collection')} className="get-button-container">
            <div className="get-txt-style">Get More cursors</div>
        </div>
    )
}
