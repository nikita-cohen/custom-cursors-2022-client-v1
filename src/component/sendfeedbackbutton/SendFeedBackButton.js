import "./SendFeedBackButton.css"
import {useHistory} from "react-router-dom";

export function SendFeedBackButton(props) {

    const history = useHistory();

    const showView = () => {
      if (props.type === "INACTIVE") {
          return <div className={"inactive-btn-feed-back"}>
              <div className={"txt-style-feed-back"}>
                  Send your feedback
              </div>
          </div>
      } else if (props.type === "ACTIVE") {
          return <div onClick={() => history.push("/pool-thank-you")} className={"active-btn-feed-back"}>
              <div className={"txt-style-feed-back"}>
                  Send your feedback
              </div>
          </div>
      }
    }

    return (
        <div>
            {showView()}
        </div>
    )
}