import "./SearchResultPage.css"
import {ActionBar} from "../../component/actionbar/ActionBar";
import InnerLayout from "../../component/innerlayout/InnerLayout";
import {CollectionCard} from "../../component/collectioncard/CollectionCard";
import {ToAllCollectionButton} from "../../component/toallcollectionsbutton/ToAllCollectionButton";
import {Footer} from "../../component/footer/Footer";
import {searchCollectionAxios, searchResultCollectionAxios} from "../../redux/action";
import connect from "react-redux/lib/connect/connect";
import {CustomSearchInput} from "../../component/customsearchinput/CustomSearchInput";
import {useEffect} from "react";

export function SearchResultPage(props) {

    useEffect(() => {
        props.searchResultCollectionAxios(props.match.params.value)
    }, [])

    const showCards = () => {
        return props.searchResult.map(item =>
            <CollectionCard itemId={item.id} image={item.imageUrl} text={item.title}/>
        );
    }

    return (
        <div className={"body-container-search-page"}>
        <div className={"page-search-result-container"}>
            <ActionBar type={"SEARCH"}/>
            <div className={"inner-style-search-page"}>
                <InnerLayout>
                    <div className={"txt-container-search-result"}>
                        <div className={"header-search-container"}>
                            Searching result
                        </div>
                        <div className={"number-of-result"}>
                            {props.searchResult.length} results for <strong>"{props.match.params.value}"</strong>
                        </div>
                    </div>
                    <div className={"card-result-container"}>
                        {showCards()}
                    </div>
                    <div className={"btn-result-container"}>
                        <ToAllCollectionButton/>
                    </div>
                </InnerLayout>

            </div>
        </div>
            <div className={"footer-result-container"}>
                <Footer/>
            </div>
        </div>
    )
}

const mapStateToProp = (state) => {
    return {
        searchResult : state.searchPage
    };
};

const mapDispatchActions = () => {
    return {
        searchResultCollectionAxios
    };
};
export const SearchResultPageConnected = connect(mapStateToProp, mapDispatchActions())(SearchResultPage);