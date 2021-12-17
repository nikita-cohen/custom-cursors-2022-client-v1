import './App.css';
import {Route} from "react-router-dom";
import {WelcomePage} from "./page/welcomepage/WelcomePage";
import {CursorCollectionPage} from "./page/cursorcollectionpage/CursorCollectionPage";
import {LastUsedPacksPage} from "./page/lastusedpackspage/LastUsedPacksPage";
import {CollectionCursorsByNamePage} from "./page/collectioncursorsbynamepage/CollectionCursorsByNamePage";
import {DoNotHaveExtension} from "./component/donothaveextension/DoNotHaveExtension";
import {InstallNowButton} from "./component/installnowbutton/InstallNowButton";

function App() {
    return (
        <div>
            {/*<Route path={"/"} exact component={WelcomePage}/>*/}
            {/*<Route path="/cursor-collection" exact component={CursorCollectionPage}/>*/}
            {/*<Route path="/last-used" exact component={LastUsedPacksPage}/>*/}
            {/*<Route path={"/collection-cursors"} exact component={CollectionCursorsByNamePage}/>*/}
            <DoNotHaveExtension/>
        </div>
    )
}

export default App;
