import {ActionBar} from "../../component/actionbar/ActionBar";
import "./CursorCollectionPage.css";
import {CollectionCard} from "../../component/collectioncard/CollectionCard";
import {Footer} from "../../component/footer/Footer";
import InnerLayout from "../../component/innerlayout/InnerLayout";
import {getAllCollection} from "../../redux/action";
import connect from "react-redux/lib/connect/connect";
import {useEffect, useState} from "react";
import {MoreCollectionButton} from "../../component/morecollectionbutton/MoreCollectionButton";
import {usePromiseTracker} from "react-promise-tracker";
import { Rings} from 'react-loader-spinner';



function CursorCollectionPage(props) {

    const [numOfCollections, setNumOfCollections] = useState(18);
    const { promiseInProgress } = usePromiseTracker();

    useEffect(() => {
        props.getAllCollection(numOfCollections)
    },[numOfCollections])

    const showCards = () => {
        return props.collectionsCard.map((item, index) =>
            <div key={index} className={"mt-to-collection-card"}>
                <CollectionCard key={index} itemId={item.id} image={item.imageUrl} text={item.title}/>
            </div>
        );
    }

    function getMoreCursors() {
        if (numOfCollections < 110){
            setNumOfCollections(numOfCollections + 18);
        }
    }


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
                    {promiseInProgress ? <div className={"spinner"}><Rings color={"#006EDD"}/></div> :
                        <div className={"collections-card-container"}>
                            {showCards()}
                        </div>
                    }
                    <div className={"btn-margin"}>
                        <MoreCollectionButton moreCursor={getMoreCursors}/>
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

const mapStateToProp = (state) => {
    return {
        collectionsCard : state.collection
    };
};

const mapDispatchActions = () => {
    return {
        getAllCollection
    };
};
export const CursorCollectionPageConnected = connect(mapStateToProp, mapDispatchActions())(CursorCollectionPage);
