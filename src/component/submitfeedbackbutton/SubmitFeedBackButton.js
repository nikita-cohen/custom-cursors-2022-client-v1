import "./SubmitFeedBackButton.css"
import {useState} from "react";

export function SubmitFeedBackButton(props) {

    const [type, setType] = useState(props.type);

    const showView = () => {
      if (type === "INACTIVE") {
          return <div className={"btn-submit-feed-back"}>
              <div className={"txt-container-submit-feed-back"}>
                  Submit
              </div>
          </div>
      } else if (type === "ACTIVE") {
          return <div className={"active-btn-submit-feed-back"}>
              <div className={"txt-container-submit-feed-back"}>
                  Submit
              </div>
          </div>
      }
    }

    return(
        <div>
            {showView()}
        </div>
    )
}