import {ActionBar} from "../../component/actionbar/ActionBar";
import "./CursorCollectionPage.css";
import {CollectionCard} from "../../component/collectioncard/CollectionCard";
import {Footer} from "../../component/footer/Footer";
import InnerLayout from "../../component/innerlayout/InnerLayout";
import {getAllCollection, getUserLastUsedCollectionAxios} from "../../redux/action";
import connect from "react-redux/lib/connect/connect";
import {useEffect, useState} from "react";
import {MoreCollectionButton} from "../../component/morecollectionbutton/MoreCollectionButton";
import {usePromiseTracker} from "react-promise-tracker";
import {Rings} from 'react-loader-spinner';
import {useHistory} from "react-router-dom";


function CursorCollectionPage(props) {

    const [numOfCollections, setNumOfCollections] = useState(18);
    const {promiseInProgress} = usePromiseTracker();
    const [numberOfLastUsed, setNumberOfLastUsed] = useState(3);
    const [showContent, setShowContent] = useState(false);
    const history = useHistory();

    useEffect(() => {
        props.getAllCollection(numOfCollections)
        props.getUserLastUsedCollectionAxios(props.userIdWelcome)
        if (window.innerWidth > 1178) {
            setNumberOfLastUsed(4);
        }
        window.addEventListener("resize", (event) => {
            if (window.innerWidth >= 1178) {
                setNumberOfLastUsed(4)
            } else {
                setNumberOfLastUsed(3);
            }
        })
        setTimeout(() => {
                setShowContent(true);
        }, 1000)
    }, [numOfCollections, props.userIdWelcome])



    const showCards = () => {
        return props.collectionsCard.map((item, index) =>
            <div key={index} className={"mt-to-collection-card"}>
                <CollectionCard key={index} itemId={item.id} image={item.imageUrl} text={item.title}/>
            </div>
        );
    }


    const showCardsLastUsed = () => {
        return props.lastUsed?.map((item, index) => {
                if (index < numberOfLastUsed) {
                    return <div key={index} className={"mt-to-collection-card"}>
                        <CollectionCard key={index} itemId={item.id} image={item.imageUrl} text={item.title}/>
                    </div>
                }
                return "";
            }
        );
    }

    const showLastUsedIfExist = () => {
        if (props.lastUsed?.length > 0){
            return <div className={"cursor-collection-page-last-used"}>
                <InnerLayout>
                    <div className={"your-last-used-packs-txt"}>Your last used packs</div>
                    <div className={"last-used-card-container-cursor-collection-page"}>
                        {showCardsLastUsed()}
                    </div>
                    <div className={"see-all-txt-last-used"}>
                        <div onClick={() => history.push('/last-used')} className={"see-all-style"}>
                            See All
                        </div>
                    </div>
                </InnerLayout>
            </div>
        }
    }


    function getMoreCursors() {
        if (numOfCollections < 110) {
            setNumOfCollections(numOfCollections + 18);
        }
    }


    return (promiseInProgress || !showContent ? <div className={"spinner"}><Rings color={"#006EDD"}/></div> :
        <div className={"body-collection-page-container"}>
            <div className={"main-cursor-collection-container"}>
                <ActionBar type={"IMAGE"}/>
                <div className={"collection-cards-main-container"}>
                    {showLastUsedIfExist()}
                    <InnerLayout>
                        <div className={"txt-collection-page-container"}>
                            <div className={"header-txt-cursor-collection"}>
                                CURSOR COLLECTIONS
                            </div>
                            <div className={"description-txt-cursor-collection-page"}>
                                <div className={"description-txt-style-collection-page"}>
                                    Use our <strong>free</strong> cursor collections! For a detailed view of all cursors
                                    in the collection - just click on image of the desired collection or click "View the
                                    Collection" button.
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
        collectionsCard: state.collection,
        lastUsed: state.lastUsed,
        userIdWelcome: state.userId
    };
};

const mapDispatchActions = () => {
    return {
        getAllCollection,
        getUserLastUsedCollectionAxios
    };
};
export const CursorCollectionPageConnected = connect(mapStateToProp, mapDispatchActions())(CursorCollectionPage);
