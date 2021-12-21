import "./SendFeedBackButton.css"

export function SendFeedBackButton(props) {

    const showView = () => {
      if (props.type === "INACTIVE") {
          return <div className={"inactive-btn-feed-back"}>
              <div className={"txt-style-feed-back"}>
                  Send your feedback
              </div>
          </div>
      } else if (props.type === "ACTIVE") {
          return <div className={"active-btn-feed-back"}>
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