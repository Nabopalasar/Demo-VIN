const DecodeList = (props) => {

    const decodeVin =
        <div className="form_text my-3 text-start text-white">
            <span>Results Decode VIN: </span>
            <span className="form_text text-start text-success">{props.vin}</span>
        </div>

    return (
        <>
            <p>{props.vinVariables.message}</p>
            {props.vinVariables.length > 0 ? decodeVin : null}

            <ul className="list-group pb-5">
                {
                    // eslint-disable-next-line
                    props.vinVariables.map(item => {
                        if (item.value !== null && item.value !== "" && item.value !== "0" && item.value !== "0 - VIN decoded clean. Check Digit (9th position) is correct" && item.variable !== "Error Code") {
                            return (
                                <li className="list-group-item list-group-item-default shadow"
                                    key={item.id}>{item.variable} : {item.value}</li>
                            );
                        }
                    })
                }
            </ul>
        </>
    );
}

export default DecodeList;