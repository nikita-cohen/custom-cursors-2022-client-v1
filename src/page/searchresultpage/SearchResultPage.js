import "./SearchResultPage.css"
import {ActionBar} from "../../component/actionbar/ActionBar";
import InnerLayout from "../../component/innerlayout/InnerLayout";
import {CollectionCard} from "../../component/collectioncard/CollectionCard";
import {ToAllCollectionButton} from "../../component/toallcollectionsbutton/ToAllCollectionButton";
import {Footer} from "../../component/footer/Footer";

export function SearchResultPage(props) {
    return (
        <div className={"page-search-result-container"}>
            <ActionBar type={"SEARCH"}/>
            <div className={"inner-style-search-page"}>
                <InnerLayout>
                    <div className={"txt-container-search-result"}>
                        <div className={"header-search-container"}>
                            Searching result
                        </div>
                        <div className={"number-of-result"}>
                            4 results for <strong>"har"</strong>
                        </div>
                    </div>
                    <div className={"card-result-container"}>
                        <CollectionCard/>
                        <CollectionCard/>
                        <CollectionCard/>
                        <CollectionCard/>
                    </div>
                    <div className={"btn-result-container"}>
                        <ToAllCollectionButton/>
                    </div>
                </InnerLayout>
                <div className={"footer-result-container"}>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}