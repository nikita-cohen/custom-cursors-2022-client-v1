import "./LastUsedPacksPage.css";
import {ActionBar} from "../../component/action-bar/ActionBar";
import {ToAllCollectionButton} from "../../component/to-all-collections-button/ToAllCollectionButton";
import {Footer} from "../../component/footer/Footer";
import InnerLayout from "../../component/inner-layout/InnerLayout";
import {getAllCollection, getUserLastUsedCollectionAxios} from "../../redux/action";
import connect from "react-redux/lib/connect/connect";
import {useEffect, useState} from "react";
import {CollectionCard} from "../../component/collection-card/CollectionCard";
import {Rings} from "react-loader-spinner";
import {usePromiseTracker} from "react-promise-tracker";

export function LastUsedPacksPage(props) {

    const {promiseInProgress} = usePromiseTracker();
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        props.getUserLastUsedCollectionAxios(props.userIdWelcome);
        setTimeout(() => {
            setShowContent(true);
        }, 1000)
    }, [props.userIdWelcome])


    const showCardsLastUsed = () => {
        return Array.from(props.lastUsed)?.reverse().map((item, index) => {
                return <div key={index} className={"mt-to-collection-card"}>
                    <CollectionCard key={index} itemId={item.id} image={item.imageUrl} text={item.title}/>
                </div>

            }
        );
    }

    return(promiseInProgress || !showContent ? <div className={"spinner"}><Rings color={"#006EDD"}/></div> :
        <div className={"body-container-last-used"}>
        <div className={"page-container-last-used"}>
            <ActionBar type={"IMAGE"}/>
            <div className={"view-container"}>
                <InnerLayout>
                    <div className={"txt-container-last"}>
                        <div className={"header-txt-last-used"}>
                            Your last used packs
                        </div>
                    </div>
                    <div className={"card-container-last-used"}>
                        {showCardsLastUsed()}
                    </div>
                    <div className={"btn-container-last-used"}>
                        <ToAllCollectionButton/>
                    </div>
                </InnerLayout>
            </div>
        </div>
            <div className={"footer-last-used"}>
                <Footer/>
            </div>
        </div>
    )
}

const mapStateToProp = (state) => {
    return {
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
export const LastUsedPacksPageConnected = connect(mapStateToProp, mapDispatchActions())(LastUsedPacksPage);

