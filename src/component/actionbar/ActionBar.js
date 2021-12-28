import "./ActionBar.css";
import InnerLayout from "../innerlayout/InnerLayout";
import {CustomSearchInput} from "../customsearchinput/CustomSearchInput";
import {useState} from "react";
import {useHistory} from "react-router-dom";

export function ActionBar(props) {

    const [inputType, setInputType] = useState(props.type);
    const history = useHistory();

    const changeInputType = () => {
      if (inputType === "IMAGE") {
          return <div onClick={() =>{setInputType("SEARCH")}}  className="search-container">
                   <div  className="search-txt">
                       Search
                   </div>
                   <div  className="img-search-container">
                   <img src="Search.png" alt="search"/>
                   </div>
                 </div>
      } else if (inputType === "SEARCH") {
          return <div className={"search-container"}>
              <CustomSearchInput/>
          </div>
      }
    }

    return(
        <div className="action-bar">
            <InnerLayout>
                <div className="menu-style">
                    <div onClick={() => history.push("/cursor-collection")} className="vector-container">
                        <img src="vector.png" alt="vector"/>
                        <div className="logo-txt-container">
                            <div className="logo-txt">
                                Custom Cursors
                            </div>
                        </div>
                    </div>
                    {changeInputType()}
                    <div onClick={() => history.push("/how-to-use")} className="how-to-use-container">
                        <div className="how-to-use-txt">
                            How to use
                        </div>
                        <div className="how-to-use-img-container">
                            <img src="how-to-use.png" alt="how to use "/>
                        </div>
                    </div>
                </div>
            </InnerLayout>
        </div>
    )
}