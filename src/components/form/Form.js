const Form = () => {
    return (
        <>
            <div className="input-group mb-3">
                <input type="text" className="form-control" aria-label="Text input with segmented dropdown button"/>
                <button type="button" className="btn btn-outline-success">Submit</button>
                <button type="button" className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                        data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Vin #1</a></li>
                    <li><a className="dropdown-item" href="#">Vin #2</a></li>
                    <li><a className="dropdown-item" href="#">Vin #3</a></li>
                    <li><a className="dropdown-item" href="#">Vin #4</a></li>
                    <li><a className="dropdown-item" href="#">Vin #5</a></li>
                </ul>
            </div>
        </>
    );
}

export default Form;