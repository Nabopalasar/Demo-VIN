import {useState} from "react";
import VinService from "../../servises/VinService";


const Form = (props) => {

    const checkRex = /(?=.*\d|[A-Z])(?=.*[A-Z])[A-Z0-9]{17}/g;

    const [vin, setVin] = useState("");
    const [lastVin, setLastVin] = useState([]);
    const [validationError, setValidationError] = useState(false);
    const [loading, setLoading] = useState(false);

    const {getVinInfo} = VinService();

    const onSubmitHandler = (e) => {
        e.preventDefault();

        let match = vin.match(checkRex);

        if (match) {
            setValidationError(false);
            setLoading(true);
            onRequest(vin);

            if (lastVin.includes(vin)) {
                return;
            } else {
                setLastVin([...lastVin, vin].slice(-5));
                setVin("");
            }
        } else {
            setValidationError(true);
        }
    }

    const onRequest = (vin) => {
        getVinInfo(vin)
            .then(onListLoaded);
    }

    const onListLoaded = (list) => {
        props.getVariables(list, vin);
        setLoading(false);
    }

    const last = lastVin.map((item, id) =>
        <li className="dropdown-item" key={id}
            onClick={() => setVin(item)}>
            {item}
        </li>
    );

    return (
        <>
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
                {
                    !validationError ? null :
                    <div className="text-danger">
                        VIN code invalid
                    </div>
                }
                {
                    !loading ? null :
                        <div>
                            loading...
                        </div>
                }
            </form>
        </>
    );
}

export default Form;