import React from "react";
import "./InnerLayout.css";
const InnerLayout = props => {
    return (
            <div className='inner_layout'>
                {props.children}
            </div>
    )
}
export default InnerLayout