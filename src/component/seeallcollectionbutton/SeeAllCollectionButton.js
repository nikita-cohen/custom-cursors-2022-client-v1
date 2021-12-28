import "./SeeAllCollectionButton.css";
import {useHistory} from "react-router-dom";

export function SeeAllCollectionButton(props){

    const history = useHistory();

    return (
        <div style={{cursor: "pointer"}} onClick={() => history.push("/cursor-collection")} className="see-all-container">
            <div className="see-all-txt">
                See All Collections
            </div>
        </div>
    )
}