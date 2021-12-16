import './App.css';
import {Route} from "react-router-dom";
import {WelcomePage} from "./page/welcomepage/WelcomePage";
import {CursorCollectionPage} from "./page/cursorcollectionpage/CursorCollectionPage";



function App() {
    return (
        <div>
            <Route path={"/"} exact component={WelcomePage}/>
            <Route path="/cursor-collection" exact component={CursorCollectionPage}/>
        </div>
    )
}

export default App;
