import "./ToAllCollectionButton.css";
import {useHistory} from "react-router-dom";

export function ToAllCollectionButton(props){

    const history = useHistory();

    return(
        <div onClick={() => history.push("/cursor-collection")} className={"btn-container-to-all-collection"}>
            <div className={"inner-txt"}>
                To All Collections
            </div>
        </div>
    )
}