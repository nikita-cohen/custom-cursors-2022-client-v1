import "./HowToUsePage.css"
import {ActionBar} from "../../component/action-bar/ActionBar";
import InnerLayout from "../../component/inner-layout/InnerLayout";
import {Footer} from "../../component/footer/Footer";
import {Link} from "react-router-dom";

export function HowToUsePage(props) {
    return (
        <div className={"main-container-how-to-use-page"}>
            <div className={"first-container"}>
                <ActionBar type={"IMAGE"}/>
                <div>
                    <InnerLayout>
                        <div className={"how-to-use-inner-container"}>
                           <div className={"text-container-how-to-use"}>
                               <div className={"txt-header-how-to-use-container"}>
                                   <div className={"txt-placeholder-how-to-use-page"}>
                                       How to Use?
                                   </div>
                               </div>
                               <div className={"how-to-install-txt-container"}>
                                   <div className={"how-to-to-install"}>
                                       How to install Custom Cursors?
                                   </div>
                               </div>
                               <div className={"first-step-txt-container"}>
                                   <div className={"first-step-txt"}>
                                       1.Go to Chrome Web Store
                                   </div>
                               </div>
                               <div className={"option-one-container"}>
                                   <div className={"option-one"}>
                                       Click here to go to official
                                   </div>
                                   <a className={"chrome-web-store-link"} href={"#"} target={"_blank"}>
                                        Chrome Web Store
                                   </a>
                               </div>
                               <div className={"second-step-txt-container"}>
                                   <div className={"second-step-txt"}>
                                       2. Add to Chrome
                                   </div>
                               </div>
                               <div className={"second-step-txt-explain-container"}>
                                   <div className={"second-step-txt-explain"}>
                                       On Chrome Web Store press the "Add to Chrome" button to add Custom Cursor to your browser.
                                   </div>
                               </div>
                               <div className={"second-step-img-container"}>
                               </div>
                               <div className={"third-step-txt-container"}>
                                   <div className={"third-step-txt"}>
                                       3. Confirmation
                                   </div>
                               </div>
                               <div className={"third-step-txt-explain-container"}>
                                   <div className={"third-step-txt-explain"}>
                                       Be sure to confirm installation by pressing the "Add extension" in a pop-up dialogue window.
                                   </div>
                               </div>
                               <div className={"second-step-img-container"}>
                               </div>
                               <div className={"four-step-txt-container"}>
                                   <div className={"four-step-txt"}>
                                       4. Installed
                                   </div>
                               </div>
                               <div className={"four-step-txt-explain-container"}>
                                   <div className={"four-step-txt-explain"}>
                                       Chrome will show installed notification and a window with Custom Cursor instructions will be opened.
                                   </div>
                               </div>
                               <div className={"second-step-img-container"}>
                               </div>
                               <div className={"line"}>
                               </div>
                               <div className={"how-to-use-extension-container"}>
                                   <div className={"how-to-use-extension-txt"}>
                                       How to Use Custom Cursors Extension?
                                   </div>
                               </div>
                               <div className={"how-to-use-extension-container-explanation"}>
                                   <div className={"how-to-use-extension-txt-explanation"}>
                                       Make sure you are trying the Custom Cursors extension on the test page or any other web page except for Chrome Web Store, browsers inner pages and Homepage. Customizations are disabled on Chrome Web Store page by Google!
                                   </div>
                               </div>
                               <div className={"first-step-extension-txt-container"}>
                                   <div className={"first-step-extension-txt"}>
                                       1. Custom Cursors menu
                                   </div>
                               </div>
                               <div className={"first-step-extension-explain-txt-container"}>
                                   <div className={"first-step-extension-explain-txt"}>
                                       To activate Custom Cursor extension click on its icon located at Chrome toolbar.
                                       The pop-up window will appear.
                                   </div>
                               </div>
                                   <img className={"frame63"} src={process.env.PUBLIC_URL + "/frame63.svg"} alt={"frame63"}/>
                               <div className={"second-step-extension-txt-container"}>
                                   <div className={"second-step-extension-txt"}>
                                       2. Setting the cursor
                                   </div>
                               </div>
                               <div className={"second-step-extension-explain-txt-container"}>
                                   <div className={"second-step-extension-explain-txt"}>
                                       Go to Custom Cursor pop-up window, scroll down and choose the desired cursor pack and click on it.
                                       Same way you can pick another cursor when you have played enough with the first one.
                                       Be sure to try it anywhere except for Chrome Web Store, browsers inner pages and Homepage.
                                   </div>
                               </div>
                               <img className={"frame63"} src={process.env.PUBLIC_URL + "/Frame64.png"} alt={"frame64"}/>
                               <div className={"third-step-extension-txt-container"}>
                                   <div className={"third-step-extension-txt"}>
                                       3. Changing the size
                                   </div>
                               </div>
                               <div className={"third-step-extension-explain-txt-container"}>
                                   <div className={"third-step-extension-explain-txt"}>
                                       To change the size of your cursor go to Custom Cursor pop-up window.
                                       Click "Change Size" button located in the top bar of the pop-up window and use scrollbar to set the desired size.
                                   </div>
                               </div>
                               <img className={"frame63"} src={process.env.PUBLIC_URL + "/Frame65.png"} alt={"frame65"} />
                               <div className={"four-step-extension-txt-container"}>
                                   <div className={"four-step-extension-txt"}>
                                       4. Disabling Custom Cursor
                                   </div>
                               </div>
                               <div className={"four-step-extension-explain-txt-container"}>
                                   <div className={"four-step-extension-explain-txt"}>
                                       To return the default system cursor go to Custom Cursor pop-up window and click "Selector"
                                   </div>
                               </div>
                               <img className={"frame63"} src={process.env.PUBLIC_URL + "/Frame66.png"} alt={"frame66"} />
                               <div className={"line"}>
                               </div>
                               <div className={"header-step-site-txt-container"}>
                                   <div className={"header-step-site-txt"}>
                                       How to Add cursors from site?
                                   </div>
                               </div>
                               <div className={"first-step-site-txt-container"}>
                                   <div className={"first-step-site-txt"}>
                                       1. Accessing Custom Cursor website
                                   </div>
                               </div>
                               <div className={"first-step-site-explain-txt-container"}>
                                   <div className={"first-step-site-explain-txt"}>
                                       To change the size of your cursor go to Custom Cursor pop-up window.
                                       Click "Change Size" button located in the top bar of the pop-up window and use scrollbar to set the desired size.
                                   </div>
                               </div>
                               <img className={"frame63"} src={process.env.PUBLIC_URL + "/Frame67.png"} alt={"frame67"} />
                               <div className={"second-step-site-txt-container"}>
                                   <div className={"second-step-site-txt"}>
                                       2. Сhoose a collection
                                   </div>
                               </div>
                               <div className={"second-step-site-explain-txt-container"}>
                                   <div className={"second-step-site-explain-txt"}>
                                       To select the collection you like, just click on it.
                                   </div>
                               </div>
                               <img className={"frame63"} src={process.env.PUBLIC_URL + "/Frame68.png"} alt={"frame68"} />
                               <div className={"third-step-site-txt-container"}>
                                   <div className={"third-step-site-txt"}>
                                       3. Сhoose a cursor
                                   </div>
                               </div>
                               <div className={"third-step-site-explain-txt-container"}>
                                   <div className={"third-step-site-explain-txt"}>
                                       To add the cursor you like, click “ADD +” button on it.
                                   </div>
                               </div>
                               <img className={"frame63"} src={process.env.PUBLIC_URL + "/Frame69.png"} alt={"frame69"} />
                               <div className={"four-step-site-txt-container"}>
                                   <div className={"four-step-site-txt"}>
                                       4. The cursor will appear in your collection in an extension
                                   </div>
                               </div>
                               <div className={"four-step-site-explain-txt-container"}>
                                   <div className={"four-step-site-explain-txt"}>
                                       Go to the extension and activate the cursor by clicking on it.
                                   </div>
                               </div>
                               <img className={"frame63"} src={process.env.PUBLIC_URL + "/Frame70.png"} alt={"frame70"} />
                           </div>
                            <div className={"select-box"}>
                                <div className={"box-container"}>
                                    <ul className="progressbar">
                                        <li id="four" className="dot active"/>
                                        <li id="five" className="dot"/>
                                        <li id="six" className="dot"/>
                                    </ul>
                                    <div className={"text-container"}>
                                        <div className={"how-to-install"}>
                                            How to install Custom Cursors?
                                        </div>
                                        <div className={"how-to-use-extension"}>
                                            How to Use Custom Cursors Extension?
                                        </div>
                                        <div className={"how-to-add-cursor"}>
                                            How to Use Custom Cursors Extension?
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </InnerLayout>
                </div>
            </div>
            <div className={"footer-how-to-use"}>
                <Footer/>
            </div>

        </div>
    )
}
