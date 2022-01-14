import {ActionBar} from "../../component/actionbar/ActionBar";
import "./CursorCollectionPage.css";
import {CollectionCard} from "../../component/collectioncard/CollectionCard";
import {GetMoreCursorsButton} from "../../component/getmorecursorsbutton/GetMoreCursorsButton";
import {Footer} from "../../component/footer/Footer";
import InnerLayout from "../../component/innerlayout/InnerLayout";
import {getAllCollection} from "../../redux/action";
import connect from "react-redux/lib/connect/connect";
import {useEffect, useState} from "react";
import {MoreCollectionButton} from "../../component/morecollectionbutton/MoreCollectionButton";



function CursorCollectionPage(props) {

    const [numOfCollections, setNumOfCollections] = useState(8);

    useEffect(() => {
        props.getAllCollection(numOfCollections)
    },[numOfCollections])

    const showCards = () => {
        return props.collectionsCard.map(item =>
            <div className={"mt-to-collection-card"}>
                <CollectionCard itemId={item.id} image={item.imageUrl} text={item.title}/>
            </div>
        );
    }

    function getMoreCursors() {
        setNumOfCollections(numOfCollections + 8);
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
                    <div className={"collections-card-container"}>
                        {showCards()}
                    </div>
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
export const CursorCollectionPageCollection = connect(mapStateToProp, mapDispatchActions())(CursorCollectionPage);
