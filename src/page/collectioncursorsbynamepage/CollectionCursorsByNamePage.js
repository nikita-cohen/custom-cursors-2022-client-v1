import {ActionBar} from "../../component/actionbar/ActionBar";
import InnerLayout from "../../component/innerlayout/InnerLayout";
import "./CollectionCursorsByNamePage.css"
import {CursorCard} from "../../component/cursorcard/CursorCard";
import {ToAllCollectionButton} from "../../component/toallcollectionsbutton/ToAllCollectionButton";
import {Footer} from "../../component/footer/Footer";

export function CollectionCursorsByNamePage(props) {

    const cursor = "https://cdn.custom-cursor.com/db/cursor/pointer_342.png";
    const pointer = "https://cdn.custom-cursor.com/db/pointer/pointer_341.png";


    function getStyle(element, property) {
        return (getComputedStyle(element, null).getPropertyValue(property));
    }

    function onCursorPointerChange(event) {
        let pointer = getStyle(event.target, 'cursor');
        if (pointer === 'pointer'){
            event.target.classList.add("cursor-hover");
        }
    }

    function changePointer(){
        let styleSheet = document.createElement('style');
        styleSheet.type = 'text/css';
        styleSheet.rel = 'stylesheet';
        styleSheet.innerHTML =  `a,  button, .cursor-hover {\n  cursor: url('${pointer}') 0 0, pointer !important;\n        }\n `;
        document.head.appendChild(styleSheet);
    }


    function disablePointer(){
        let styleSheet = document.createElement('style');

        styleSheet.type = 'text/css';
        styleSheet.rel = 'stylesheet';

        styleSheet.innerHTML =  `a, button, .cursor-hover {\n  cursor: pointer !important;\n        }\n `;
        document.head.appendChild(styleSheet);
    }

    function onTryCursor(type)  {
        if(type === "stop") {
            changePointer()
            document.getElementsByTagName("body")[0].style.cursor = `url('${cursor}'), default`
        } else {
            disablePointer()
            document.getElementsByTagName("body")[0].style.cursor = "default";
        }
    }

    document.body.addEventListener('mouseover', onCursorPointerChange)


    return (
        <div className={"body-container-collection-cursors"}>
        <div className={"main-collection-cursor-page-container"}>
            <ActionBar type={"IMAGE"}/>
            <div className={"view-container"}>
                <InnerLayout>
                    <div className={"main-header-txt-container-by-name"}>
                        <div className={"txt-by-name"}>
                            Name of collection
                        </div>
                    </div>
                    <div className={"card-container-by-name"}>
                        <CursorCard onTry={onTryCursor}/>
                        <CursorCard onTry={onTryCursor}/>
                        <CursorCard onTry={onTryCursor}/>
                        <CursorCard onTry={onTryCursor}/>
                        <CursorCard onTry={onTryCursor}/>
                        <CursorCard onTry={onTryCursor}/>
                        <CursorCard onTry={onTryCursor}/>
                        <CursorCard onTry={onTryCursor}/>
                        <CursorCard onTry={onTryCursor}/>
                        <CursorCard onTry={onTryCursor}/>
                    </div>
                    <div className={"btn-to-all-by-name-container"}>
                        <ToAllCollectionButton/>
                    </div>
                </InnerLayout>

            </div>
        </div>
            <div className={"footer-by-name-container"}>
                <Footer/>
            </div>
        </div>
    )
}