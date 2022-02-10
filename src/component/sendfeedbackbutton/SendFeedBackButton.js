import "./SendFeedBackButton.css"
import {useHistory} from "react-router-dom";
import { trackPromise } from 'react-promise-tracker';

export function SendFeedBackButton(props) {

    const history = useHistory();
    const data = props.data;

    const messageObj = {
        id : props.userId,
        one : data[0].checked? 1 : 0,
        two : data[1].checked? 1 : 0,
        three : data[2].checked? 1 : 0,
        four : data[3].checked? 1 : 0,
        five : data[4].checked? 1 : 0,
        text : props.textData
    }

    const handleSubmit = async () => {
        props.buttonClick();
        try {
            const response = await trackPromise(fetch("https://v1.nocodeapi.com/nikita_cohen/google_sheets/oBnqwXbBKzilEghz?tabId=sheet1",
                {
                    method : "POST",
                    headers : {
                        'Content-Type' : 'application/json'
                    },
                    body : JSON.stringify([[messageObj.id, messageObj.one, messageObj.two, messageObj.three, messageObj.four, messageObj.five, messageObj.text]])
                }))
        } catch (e) {

        }
    }

    const showView = () => {
      if (props.type === "INACTIVE") {
          return <div className={"inactive-btn-feed-back"}>
              <div className={"txt-style-feed-back"}>
                  Send your feedback
              </div>
          </div>
      } else if (props.type === "ACTIVE") {
          return <div onClick={async () =>{
              await handleSubmit()
              history.push(`/pool-thank-you?userId=${props.userId}`)
             }} className={"active-btn-feed-back"}>
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
