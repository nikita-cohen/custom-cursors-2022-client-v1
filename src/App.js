import './App.css';
import {Route} from "react-router-dom";
import {WelcomePageConnected} from "./page/welcomepage/WelcomePage";
import {CursorCollectionPageConnected} from "./page/cursorcollectionpage/CursorCollectionPage";
import {LastUsedPacksPage} from "./page/lastusedpackspage/LastUsedPacksPage";
import {CollectionCursorsByNamePageConnected} from "./page/collectioncursorsbynamepage/CollectionCursorsByNamePage";
import {SearchResultPageConnected} from "./page/searchresultpage/SearchResultPage";
import {TermsOfUsePage} from "./page/termsofusepage/TermsOfUsePage";
import {PrivacyPolicyPage} from "./page/privacypolicypage/PrivacyPolicyPage";
import {CookiePolicyPage} from "./page/cookiepolicypage/CookiePolicyPage";
import {HowToUsePage} from "./page/howtousepage/HowToUsePage";
import {PoolPage} from "./page/poolpage/PoolPage";
import {ThankYouPage} from "./page/thankyoupage/ThankYouPage";
import {ReinstallPage} from "./page/reinstallpage/ReinstallPage";

function App(props) {

    return (
        <div className={"border-main"}>
            <Route path={"/"} exact component={WelcomePageConnected}/>
            <Route path={"/cursor-collection"} exact component={CursorCollectionPageConnected}/>
            <Route path={"/last-used"} exact component={LastUsedPacksPage}/>
            <Route path={"/collection-cursors/:id"} exact component={CollectionCursorsByNamePageConnected}/>
            <Route path={"/search-result/:value"} exact component={SearchResultPageConnected}/>
            <Route path={"/term-of-use"} exact component={TermsOfUsePage}/>
            <Route path={"/privacy-policy"} exact component={PrivacyPolicyPage}/>
            <Route path={"/cookie-policy"} exact component={CookiePolicyPage}/>
            <Route path={"/how-to-use"} exact component={HowToUsePage}/>
            <Route path={"/pool"} exact component={PoolPage}/>
            <Route path={"/pool-thank-you"} exact component={ThankYouPage}/>
            <Route path={"/pool-reinstall"} exact component={ReinstallPage}/>
        </div>
    )
}

export default App;
