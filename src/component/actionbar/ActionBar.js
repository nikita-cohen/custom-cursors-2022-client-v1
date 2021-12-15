import "./ActionBar.css";
import InnerLayout from "../innerlayout/InnerLayout";

export function ActionBar(props) {
    return(
        <div className="action-bar">
            <InnerLayout>
                <div className="menu-style">
                    <div className="vector-container">
                        <img src="vector.png" alt="vector"/>
                        <div className="logo-txt-container">
                            <div className="logo-txt">
                                Custom Cursors
                            </div>
                        </div>
                    </div>
                    <div className="search-container">
                        <div className="search-txt">
                            Search
                        </div>
                        <div className="img-search-container">
                            <img src="Search.png" alt="search"/>
                        </div>
                    </div>
                    <div className="how-to-use-container">
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