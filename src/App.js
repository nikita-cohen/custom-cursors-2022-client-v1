import './App.css';
import {Route} from "react-router-dom";
import {WelcomePage} from "./page/welcomepage/WelcomePage";



function App() {
    return (
        <div>
            <Route  path="/" exact component={WelcomePage}/>
        </div>
    )
}

export default App;
