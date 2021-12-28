import {ActionBar} from "../../component/actionbar/ActionBar";
import "./CursorCollectionPage.css";
import {CollectionCard} from "../../component/collectioncard/CollectionCard";
import {GetMoreCursorsButton} from "../../component/getmorecursorsbutton/GetMoreCursorsButton";
import {Footer} from "../../component/footer/Footer";
import InnerLayout from "../../component/innerlayout/InnerLayout";

export function CursorCollectionPage(props) {
    return(
        <div className={"body-collection-page-container"}>
        <div className={"main-cursor-collection-container"}>
            <ActionBar type={"IMAGE"}/>
            <div className={"collection-cards-main-container"}>
                <InnerLayout>
                    <div className={"txt-collection-page-container"}>
                        <div className={"header-txt-cursor-collection"}>
                            CURSOR COLLECTIONS
                        </div>
                        <div className={"description-txt-cursor-collection-page"}>
                            <div className={"description-txt-style-collection-page"}>
                                Use our <strong>free</strong> cursor collections! For a detailed view of all cursors in the collection - just click on image of the desired collection or click "View the Collection" button.
                            </div>
                        </div>
                    </div>
                    <div className={"collections-card-container"}>
                        <div className={"mt-to-collection-card"}>
                            <CollectionCard/>
                        </div>
                        <div className={"mt-to-collection-card"}>
                            <CollectionCard/>
                        </div>
                        <div className={"mt-to-collection-card"}>
                            <CollectionCard/>
                        </div>
                        <div className={"mt-to-collection-card"}>
                            <CollectionCard/>
                        </div>
                        <div className={"mt-to-collection-card"}>
                            <CollectionCard/>
                        </div>
                        <div className={"mt-to-collection-card"}>
                            <CollectionCard/>
                        </div>
                        <div className={"mt-to-collection-card"}>
                            <CollectionCard/>
                        </div>
                        <div className={"mt-to-collection-card"}>
                            <CollectionCard/>
                        </div>
                    </div>
                    <div className={"btn-margin"}>
                        <GetMoreCursorsButton/>
                    </div>
                </InnerLayout>

            </div>
        </div>
            <div className={"footer-sizing"}>
                <Footer/>
            </div>
        </div>
    )
}