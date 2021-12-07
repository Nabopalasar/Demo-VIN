import {useState} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Variables from "../variable/Variables";
import NavBar from "../navBar/NavBar";
import Form from "../form/Form";
import DecodeList from "../decodeList/DecodeList";

import "./app.scss";
import Header from "../header/Header";


const App = () => {

    const [vinVariables, setVinVariables] = useState([]);
    const [vin, setVin] = useState("");

    const getVinVariables = (arr, vin) => {
        setVinVariables(arr)
        setVin(vin)
    }

    /*RETURN*/
    return (
        <Router>
            <div className="app">
                <NavBar/>
                <div className='container'>
                    <Switch>
                        <Route path="/variables">
                            <Variables/>
                        </Route>
                        <Route path="/">
                            <Header/>
                            <Form getVariables={getVinVariables}/>
                            <DecodeList vinVariables={vinVariables} vin={vin}/>
                        </Route>

                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;