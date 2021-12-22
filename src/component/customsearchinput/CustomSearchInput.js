import "./CustomSearchInput.css"
import {useState} from "react";

export function CustomSearchInput(props) {

    const [display, setDisplay] = useState("none")

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


    return(
      <div className={"custom-search-input-container"}>
          <div>
              <input onChange={(event) => onChangeDisplay(event)} className={onDropDownDisplay()} placeholder="search" type={"text"}/>
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
