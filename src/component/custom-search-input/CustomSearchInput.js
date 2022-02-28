import "./CustomSearchInput.css"
import {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {searchCollectionAxios} from "../../redux/action";
import connect from "react-redux/lib/connect/connect";

export function CustomSearchInput(props) {

    const [display, setDisplay] = useState("none")
    const [value, setValue] = useState("")
    const history = useHistory()

    useEffect(() => {
        props.searchCollectionAxios(value);
        document.addEventListener("click", (event) => {
            const searchPanel = event.target.closest(".custom-search-input-container");
            if (!searchPanel) {
                setDisplay('none')
            }
        })
    },[value])

    const onChangeValue = (event) => {
        setValue(event.target.value);
    }


    const showResult = () => {
      if (props.searchResult[0]){
          return props.searchResult.map((item, index) => <li key={index} onClick={() => history.push("/collection-cursors/" + item.id)} className={"txt-style-search"}>{item.title}</li>)
      }
    }

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

    const showATagResult = () => {
        if (props.searchResult.length > 0) {
           return <a onClick={() => history.push("/search-result/"+ value)} href={"#"}>{`Show All (${props.searchResult.length})`}</a>
        } else {
            return <div className={'nothing-found'}>Nothing Found</div>
        }
    }


    return(
      <div className={"custom-search-input-container"}>
          <div className={onDropDownDisplayDiv()}>
              <input onKeyPress={(event) => {
                  if(event.key === 'Enter' && props.searchResult.length > 0){
                      history.push("/search-result/"+ value)
                  }
              }} onChange={(event) =>
              {
                  onChangeValue(event)
                  onChangeDisplay(event)
              }} className={onDropDownDisplay()} placeholder="Search" type={"text"}/>
          </div>
          <div  id={"drop-down"} className={"list-container-input"} style={{display: display}}>
              <ul>
                  {showResult()}
              </ul>
              <div className={"show-all-href"}>
                  {showATagResult()}
              </div>

          </div>
      </div>
    )
}

const mapStateToProp = (state) => {
    return {
        searchResult : state.searchResult
    };
};

const mapDispatchActions = () => {
    return {
        searchCollectionAxios
    };
};
export const CustomSearchInputConnected = connect(mapStateToProp, mapDispatchActions())(CustomSearchInput);

