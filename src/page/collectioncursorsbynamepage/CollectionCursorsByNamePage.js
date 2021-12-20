import {ActionBar} from "../../component/actionbar/ActionBar";
import InnerLayout from "../../component/innerlayout/InnerLayout";
import "./CollectionCursorsByNamePage.css"
import {CursorCard} from "../../component/cursorcard/CursorCard";
import {ToAllCollectionButton} from "../../component/toallcollectionsbutton/ToAllCollectionButton";
import {Footer} from "../../component/footer/Footer";

export function CollectionCursorsByNamePage(props) {
    return (
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
                        <CursorCard/>
                        <CursorCard/>
                        <CursorCard/>
                        <CursorCard/>
                        <CursorCard/>
                        <CursorCard/>
                        <CursorCard/>
                        <CursorCard/>
                        <CursorCard/>
                        <CursorCard/>
                    </div>
                    <div className={"btn-to-all-by-name-container"}>
                        <ToAllCollectionButton/>
                    </div>
                </InnerLayout>
                <div className={"footer-by-name-container"}>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}