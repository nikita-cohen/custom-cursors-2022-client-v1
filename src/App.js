import './App.css';
import {Route} from "react-router-dom";
import {WelcomePage} from "./page/welcomepage/WelcomePage";
import {CursorCollectionPage} from "./page/cursorcollectionpage/CursorCollectionPage";
import {LastUsedPacksPage} from "./page/lastusedpackspage/LastUsedPacksPage";
import {CollectionCursorsByNamePage} from "./page/collectioncursorsbynamepage/CollectionCursorsByNamePage";
import {SearchResultPage} from "./page/searchresultpage/SearchResultPage";
import {TermsOfUsePage} from "./page/termsofusepage/TermsOfUsePage";
import {PrivacyPolicyPage} from "./page/privacypolicypage/PrivacyPolicyPage";
import {CookiePolicyPage} from "./page/cookiepolicypage/CookiePolicyPage";
import {HowToUsePage} from "./page/howtousepage/HowToUsePage";


function App() {
    return (
        <div>
            <Route path={"/"} exact component={WelcomePage}/>
            <Route path="/cursor-collection" exact component={CursorCollectionPage}/>
            <Route path="/last-used" exact component={LastUsedPacksPage}/>
            <Route path={"/collection-cursors"} exact component={CollectionCursorsByNamePage}/>
            <Route path={"/search-result"} exact component={SearchResultPage}/>
            <Route path={"/term-of-use"} exact component={TermsOfUsePage}/>
            <Route path={"/privacy-policy"} exact component={PrivacyPolicyPage}/>
            <Route path={"/cookie-policy"} exact component={CookiePolicyPage}/>
            <Route path={"/how-to-use"} exact component={HowToUsePage}/>
        </div>
    )
}

export default App;
