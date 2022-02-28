import "./SubmitFeedBackButton.css"
import {useHistory} from "react-router-dom";


export function SubmitFeedBackButton(props) {


    const history = useHistory();

    const showView = () => {
      if (props.type === "INACTIVE") {
          return <div className={"btn-submit-feed-back"}>
              <div className={"txt-container-submit-feed-back"}>
                  Submit
              </div>
          </div>
      } else if (props.type === "ACTIVE") {
          return <div onClick={async () =>{
              await props.handleSubmit()
              if (props.isTheEmailCorrect === true) {
                  history.push("/pool-reinstall")
              }
              }} className={"active-btn-submit-feed-back"}>
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
