import "./LastUsedPacksPage.css";
import {ActionBar} from "../../component/actionbar/ActionBar";
import InnerLayout from "../../component/innerlayout/InnerLayout";
import {CollectionCard} from "../../component/collectioncard/CollectionCard";
import {ToAllCollectionButton} from "../../component/toallcollectionsbutton/ToAllCollectionButton";
import {Footer} from "../../component/footer/Footer";

export function LastUsedPacksPage(props) {
    return(
        <div className={"page-container-last-used"}>
            <ActionBar/>
            <div className={"view-container"}>
                <InnerLayout>
                    <div className={"txt-container-last"}>
                        <div className={"header-txt-last-used"}>
                            Your last used packs
                        </div>
                    </div>
                    <div className={"card-container-last-used"}>
                        <div className={"collection-card-last-used"}>
                            <CollectionCard/>
                        </div>
                        <div className={"collection-card-last-used"}>
                            <CollectionCard/>
                        </div >
                        <div className={"collection-card-last-used"}>
                            <CollectionCard/>
                        </div>
                        <div className={"collection-card-last-used"}>
                            <CollectionCard/>
                        </div>
                        <div className={"collection-card-last-used"}>
                            <CollectionCard/>
                        </div>
                        <div className={"collection-card-last-used"}>
                            <CollectionCard/>
                        </div>
                        <div className={"collection-card-last-used"}>
                            <CollectionCard/>
                        </div>
                        <div className={"collection-card-last-used"}>
                            <CollectionCard/>
                        </div>
                    </div>
                    <div className={"btn-container-last-used"}>
                        <ToAllCollectionButton/>
                    </div>
                </InnerLayout>
                <div className={"footer-last-used"}>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}