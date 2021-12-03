import NavBar from "../navBar/NavBar";
import Form from "../form/Form";
import DecodeList from "../decodeList/DecodeList";

import "./app.scss";
import {useState} from "react";


const App = () => {

    const [vinVariables, setVinVariables] = useState([]);
    const [vin, setVin] = useState("");



    const getVinVariables = (arr, vin) => {
        setVinVariables(arr)
        setVin(vin)
    }

    console.log(vinVariables)

    return (
        <div className="app">
            <NavBar/>
            <div className='container'>
                <h1 className="mt-5 text-center text-white">Demo VIN Decoder</h1>
                <div className="my-3 text-center text-white">
                    Type 17 digits of your vehicles identification number.
                </div>
                <Form getVariables={getVinVariables}/>
                <DecodeList vinVariables={vinVariables} vin={vin}/>
            </div>
        </div>
    );
}

export default App;