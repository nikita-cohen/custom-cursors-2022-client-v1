import './App.css';
import {Route, Switch} from "react-router-dom";
import {WelcomePageConnected} from "./page/welcome-page/WelcomePage";
import {CursorCollectionPageConnected} from "./page/cursor-collection-page/CursorCollectionPage";
import {LastUsedPacksPageConnected} from "./page/last-used-packs-page/LastUsedPacksPage";
import {
    CollectionCursorsByNamePageConnected
} from "./page/collection-cursors-by-name-page/CollectionCursorsByNamePage";
import {SearchResultPageConnected} from "./page/search-result-page/SearchResultPage";
import {TermsOfUsePage} from "./page/terms-of-use-page/TermsOfUsePage";
import {PrivacyPolicyPage} from "./page/privacy-policy-page/PrivacyPolicyPage";
import {CookiePolicyPage} from "./page/cookie-policy-page/CookiePolicyPage";
import {HowToUsePage} from "./page/how-to-use-page/HowToUsePage";
import {PoolPage} from "./page/pool-page/PoolPage";
import {ThankYouPage} from "./page/thank-you-page/ThankYouPage";
import {ReinstallPage} from "./page/reinstall-page/ReinstallPage";
import {useEffect} from "react";
import { saveUserId} from "./redux/action";
import connect from "react-redux/lib/connect/connect";

function App(props) {

    useEffect(() => {
        setTimeout(() => {
            window.postMessage({ type: "FROM_PAGE", text: "Hello from the webpage!" }, "*");
        }, 500)

        window.addEventListener('message', (event) => {
            if (event.data.type && (event.data.type === "FROM_EXTENSION")){
                props.saveUserId(event.data.user_id_cursors);
            }
        })
    })


    return (
        <div className={"border-main"}>
            <Switch>
                <Route path="/" exact component={WelcomePageConnected}/>
                <Route path={"/cursor-collection"} exact component={CursorCollectionPageConnected}/>
                <Route path={"/last-used"} exact component={LastUsedPacksPageConnected}/>
                <Route path={"/collection-cursors/:id"} exact component={CollectionCursorsByNamePageConnected}/>
                <Route path={"/search-result/:value"} exact component={SearchResultPageConnected}/>
                <Route path={"/term-of-use"} exact component={TermsOfUsePage}/>
                <Route path={"/privacy-policy"} exact component={PrivacyPolicyPage}/>
                <Route path={"/cookie-policy"} exact component={CookiePolicyPage}/>
                <Route path={"/how-to-use"} exact component={HowToUsePage}/>
                <Route path={"/pool"} exact component={PoolPage}/>
                <Route path={"/pool-thank-you"} exact component={ThankYouPage}/>
                <Route path={"/pool-reinstall"} exact component={ReinstallPage}/>
            </Switch>

        </div>
    )
}

const mapStateToProp = (state) => {
    return {
    };
};

const mapDispatchActions = () => {
    return {
        saveUserId
    };
};

export const AppConnected = connect(mapStateToProp, mapDispatchActions())(App);

export default App;
