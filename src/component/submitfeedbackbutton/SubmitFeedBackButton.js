import "./SubmitFeedBackButton.css"

export function SubmitFeedBackButton(props) {

    const showView = () => {
      if (props.type === "INACTIVE") {
          return <div className={"btn-submit-feed-back"}>
              <div className={"txt-container-submit-feed-back"}>
                  Submit
              </div>
          </div>
      } else if (props.type === "ACTIVE") {
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