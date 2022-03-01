import "./ToAllCollectionButton.css";
import {Link} from "react-router-dom";

export function ToAllCollectionButton(props){

    return(
        <Link to={"/cursor-collection"}  className={"btn-container-to-all-collection"}>
            <div className={"inner-txt"}>
                To All Collections
            </div>
        </Link>
    )
}
