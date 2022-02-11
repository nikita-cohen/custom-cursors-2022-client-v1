import "./SearchResultPage.css"
import {ActionBar} from "../../component/action-bar/ActionBar";
import InnerLayout from "../../component/inner-layout/InnerLayout";
import {CollectionCard} from "../../component/collection-card/CollectionCard";
import {ToAllCollectionButton} from "../../component/to-all-collections-button/ToAllCollectionButton";
import {Footer} from "../../component/footer/Footer";
import {searchResultCollectionAxios} from "../../redux/action";
import connect from "react-redux/lib/connect/connect";
import {useEffect} from "react";
import {Rings} from "react-loader-spinner";
import {usePromiseTracker} from "react-promise-tracker";

export function SearchResultPage(props) {

    useEffect(() => {
        props.searchResultCollectionAxios(props.match.params.value)
    }, [])

    const { promiseInProgress } = usePromiseTracker();

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
                {promiseInProgress ? <div className={"spinner"}><Rings color={"#006EDD"}/></div> :
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
                }
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
