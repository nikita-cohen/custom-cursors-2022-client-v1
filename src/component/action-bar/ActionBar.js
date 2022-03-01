import "./ActionBar.css";
import InnerLayout from "../inner-layout/InnerLayout";
import {CustomSearchInputConnected} from "../custom-search-input/CustomSearchInput";
import {useState} from "react";
import {Link} from "react-router-dom";
import {SuccessPopUp} from "../success-popup/SuccessPopUp";


export function ActionBar(props) {

    const [inputType, setInputType] = useState(props.type);

    const changeInputType = () => {
      if (inputType === "IMAGE") {
          return <div onClick={() =>{setInputType("SEARCH")}}  className="search-container">
                   <div  className="search-txt">
                       Search
                   </div>
                   <div  className="img-search-container">
                   <img src={process.env.PUBLIC_URL + "/Search.svg"} alt="search"/>
                   </div>
                 </div>
      } else if (inputType === "SEARCH") {
          return <div  className={"search-container"}>
              <CustomSearchInputConnected setInputType={setInputType}/>
          </div>
      }
    }

    if (props.addCursor === "flex") {
        setTimeout(() => {
            props.changePopUp()
        }, 5000)
    }

    return(
        <div className="action-bar">
            <div className={"pop-up-success"} style={{display : props.addCursor}}>
                <SuccessPopUp closePopUp={props.changePopUp}/>
            </div>
            <InnerLayout>
                <div className="menu-style">
                    <Link to="/cursor-collection" className="vector-container my-test-class">
                        <img className={"logo-img-vector"} src={process.env.PUBLIC_URL + "/vector.svg"} alt="vector"/>
                        <div className="logo-txt-container">
                            <div className="logo-txt">
                                Custom Cursors
                            </div>
                        </div>
                    </Link>
                    {changeInputType()}
                    <Link to={"/how-to-use"}  className="how-to-use-container">
                        <div className="how-to-use-txt">
                            How to use
                        </div>
                        <div className="how-to-use-img-container">
                            <img src={process.env.PUBLIC_URL + "/how-to-use.svg"} alt="how to use "/>
                        </div>
                    </Link>
                </div>
            </InnerLayout>
        </div>
    )
}
