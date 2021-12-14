import './App.css';
import {ActionBar} from "./component/actionbar/ActionBar";
import {Route} from "react-router-dom";
import {WelcomePage} from "./page/welcomepage/WelcomePage";
import {Footer} from "./component/footer/Footer";

function App() {
    return (
        <div>
            <Route  path="/" exact component={WelcomePage}/>
        </div>
    )
}

export default App;
