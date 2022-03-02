import {ActionBar} from "../../component/action-bar/ActionBar";
import "./CursorCollectionPage.css";
import {CollectionCard} from "../../component/collection-card/CollectionCard";
import {Footer} from "../../component/footer/Footer";
import InnerLayout from "../../component/inner-layout/InnerLayout";
import {getAllCollection, getUserCollectionAxios, getUserLastUsedCollectionAxios} from "../../redux/action";
import connect from "react-redux/lib/connect/connect";
import {useEffect, useState} from "react";
import {MoreCollectionButton} from "../../component/more-collection-button/MoreCollectionButton";
import {usePromiseTracker} from "react-promise-tracker";
import {Rings} from 'react-loader-spinner';
import {useHistory} from "react-router-dom";


function CursorCollectionPage(props) {

    const [numOfCollections, setNumOfCollections] = useState(18);
    const {promiseInProgress} = usePromiseTracker();
    const [numberOfLastUsed, setNumberOfLastUsed] = useState(3);
    const [showContent, setShowContent] = useState(false);
    const [isSubscribe, setIsSubscribe] = useState(true);
    const history = useHistory();

    useEffect(() => {
        setIsSubscribe(true)
        if (isSubscribe){
            props.getAllCollection(numOfCollections)
            props.getUserLastUsedCollectionAxios(props.userIdWelcome)
            props.getUserCollectionAxios(props.userIdWelcome)
        }
        if (window.innerWidth > 1178) {
            if (isSubscribe){
                setNumberOfLastUsed(4);
            }
        }
        window.addEventListener("resize", (event) => {
            if (window.innerWidth >= 1178) {
                if (isSubscribe){
                    setNumberOfLastUsed(4)
                }
            } else {
                if (isSubscribe) {
                    setNumberOfLastUsed(3);
                }
            }
        })
        setTimeout(() => {
            if (isSubscribe){
                setShowContent(true);
            }
        }, 1000)


    }, [numOfCollections, props.userIdWelcome])

    useEffect(() => {
        return () => {
            setIsSubscribe(false)
        };
    }, []);

    const showCards = () => {
        return props.collectionsCard.map((item, index) =>
            <div key={index} className={"mt-to-collection-card"}>
                <CollectionCard key={index} itemId={item.id} image={item.imageUrl} text={item.title}/>
            </div>
        );
    }


    const showCardsLastUsed = () => {
        return Array.from(props.lastUsed).reverse().map((item, index) => {
                if (index < numberOfLastUsed) {
                    return <div key={index} className={"mt-to-collection-card"}>
                        <CollectionCard key={index} itemId={item.id} image={item.imageUrl} text={item.title}/>
                    </div>
                }
                return "";
            }
        );
    }

    const showSeeAllButton = () => {
        if (props.lastUsed?.length > 4) {
            return <a href={'#'} onClick={() => history.push('/last-used')} className={"see-all-style"}>
                See All
            </a>
        }
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
                        {showSeeAllButton()}
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


    return (
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
                            {promiseInProgress || !showContent ? <div className={"spinner-button"}><Rings color={"#006EDD"}/></div> : <MoreCollectionButton moreCursor={getMoreCursors}/>}
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
        userIdWelcome: state.userId,
        userCollection : state.userCollection
    };
};

const mapDispatchActions = () => {
    return {
        getAllCollection,
        getUserLastUsedCollectionAxios,
        getUserCollectionAxios
    };
};
export const CursorCollectionPageConnected = connect(mapStateToProp, mapDispatchActions())(CursorCollectionPage);
