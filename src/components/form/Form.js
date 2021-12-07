import {useState} from "react";
import VinService from "../../servises/VinService";


const Form = (props) => {

    const [vin, setVin] = useState("");
    const [lastVin, setLastVin] = useState([]);

    const {getVinInfo} = VinService();

    const onSubmitHandler = (e) => {
        e.preventDefault();

        onRequest(vin);

        setLastVin([...lastVin, vin].slice(-5))
        setVin("");
    }

    const onRequest = (vin) => {
        getVinInfo(vin)
            .then(onListLoaded);
    }

    const onListLoaded = (list) => {
        props.getVariables(list, vin);
    }

    const last = lastVin.map((item, id) =>
        <li className="dropdown-item" key={id}>{item}</li>
    );


    return (
        <form onSubmit={onSubmitHandler}>
            <div className="input-group mb-3 shadow">
                <input type="text"
                       className="form-control"
                       aria-label="Text input with segmented dropdown button"
                       value={vin}
                       onChange={(e) => setVin(e.target.value)}
                />
                <button type="submit" className="btn btn-outline-success">Submit</button>
                <button type="button" className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                        data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul className="dropdown-menu">
                    {lastVin.length > 0 ? last : null}
                </ul>
            </div>
        </form>
    );
}

export default Form;