const DecodeList = (props) => {

    /*RENDER ITEMS*/
    // const renderItems = (arr) => {
    //     // eslint-disable-next-line
    //     const items = arr.map(item => {
    //         if (item.value !== null && item.value !== "" && item.value !== "0" && item.value !== "0 - VIN decoded clean. Check Digit (9th position) is correct") {
    //             return (
    //                 <li className="list-group-item list-group-item-default shadow"
    //                     key={item.id}>{item.variable} : {item.value}</li>
    //             );
    //         }
    //     });
    //     return (
    //             {items}
    //     );
    // }
    //
    // const items = renderItems(props.vinVariables);

    return (
        <>
            <div className="form_text my-3 text-start text-white">
                Results Decode VIN:
                <span className="form_text text-start text-success">{props.vin}</span>
            </div>

            <ul className="list-group pb-5">
                {
                    // eslint-disable-next-line
                    props.vinVariables.map(item => {
                        if (item.value !== null && item.value !== "" && item.value !== "0" && item.value !== "0 - VIN decoded clean. Check Digit (9th position) is correct") {
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