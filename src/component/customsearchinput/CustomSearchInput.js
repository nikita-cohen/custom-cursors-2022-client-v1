import "./CustomSearchInput.css"
import {useState} from "react";
import {useHistory} from "react-router-dom";

export function CustomSearchInput(props) {

    const [display, setDisplay] = useState("none")
    const history = useHistory()

    const onChangeDisplay = (event) => {
      if (event.target.value === "") {
          setDisplay("none")
      } else {
          setDisplay("block")
      }
    }

    const onDropDownDisplay = () => {
      if (display === "none") {
          return "input-search-no-drop"
      } else {
          return "input-search"
      }
    }

    const onDropDownDisplayDiv = () => {
        if (display === "none") {
            return ""
        } else {
            return "input-place-holder"
        }
    }


    return(
      <div className={"custom-search-input-container"}>
          <div className={onDropDownDisplayDiv()}>
              <input onKeyPress={(event) => {
                  if(event.key === 'Enter'){
                      history.push("/search-result")
                  }
              }} onChange={(event) => onChangeDisplay(event)} className={onDropDownDisplay()} placeholder="Search" type={"text"}/>
          </div>
          <div id={"drop-down"} className={"list-container-input"} style={{display: display}}>
              <ul>
                  <li className={"txt-style-search"}>Harry Potter Collection</li>
                  <li className={"txt-style-search"}>Harrison Ford Collection </li>
              </ul>
              <div className={"show-all-href"}>
                  <a href={"#"}>Show All (2)</a>
              </div>

          </div>
      </div>
    )
}
