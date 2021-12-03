import {useState} from "react";
import VinService from "../../servises/VinService";


const Form = (props) => {

    const [vin, setVin] = useState("");

    const {getVinInfo} = VinService();

    const onSubmitHandler = (e) => {
        e.preventDefault();

        onRequest(vin);
    }

    const onRequest = (vin) => {
        getVinInfo(vin)
            .then(onListLoaded)
    }

    const onListLoaded = (list) => {
        props.getVariables(list, vin);
    }

    /* VinCode Checker */
    const checkVin = () => {

    }

    /*RETURN*/
    return (
        <form onSubmit={onSubmitHandler}>
            <div className="input-group mb-3">
                <input type="text"
                       className="form-control"
                       aria-label="Text input with segmented dropdown button"
                       onChange={(e) => setVin(e.target.value)}
                />
                <button type="submit" className="btn btn-outline-success">Submit</button>
                <button type="button" className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                        data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul className="dropdown-menu">
                    <li className="dropdown-item">Vin #1</li>
                    <li className="dropdown-item">Vin #2</li>
                    <li className="dropdown-item">Vin #3</li>
                    <li className="dropdown-item">Vin #4</li>
                    <li className="dropdown-item">Vin #5</li>
                </ul>
            </div>
        </form>
    );
}

export default Form;