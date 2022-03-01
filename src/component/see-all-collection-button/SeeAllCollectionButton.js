import "./SeeAllCollectionButton.css";
import {Link} from "react-router-dom";

export function SeeAllCollectionButton(props){

    return (
        <Link to={"/cursor-collection"} style={{cursor: "pointer"}}  className="see-all-container">
            <div className="see-all-txt">
                See All Collections
            </div>
        </Link>
    )
}
