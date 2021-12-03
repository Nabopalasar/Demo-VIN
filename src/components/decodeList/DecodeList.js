import VinService from "../../servises/VinService";
import {useEffect, useState} from "react";


const DecodeList = (props) => {

    // const [list, setList] = useState([]);
    //
    // const {getVinInfo} = VinService();
    //
    // useEffect(() => {
    //     onRequest();
    //     // eslint-disable-next-line
    // }, []);
    //
    // const onListLoaded = (list) => {
    //     setList(list);
    // }
    //
    // const onRequest = () => {
    //     const vin = "1FTFW1CT5DFC10312";
    //     getVinInfo(vin)
    //         .then(onListLoaded)
    // }

    /*RENDER ITEMS*/
    const renderItems = (arr) => {
        // eslint-disable-next-line
        const items = arr.map(item => {
            if (item.value !== null && item.value !== "" && item.value !== "0" && item.value !== "0 - VIN decoded clean. Check Digit (9th position) is correct") {
                return (
                    <li className="list-group-item list-group-item-default"
                        key={item.id}>{item.variable} : {item.value}</li>
                );
            }
        });
        return (
            <ul className="list-group pb-5">
                {items}
            </ul>
        );
    }

    const items = renderItems(props.vinVariables)

    return (
        <>
            <div className="form_text my-3 text-start text-white">Results Decode VIN: <span className="form_text text-start text-success">{props.vin}</span></div>
            {items}
        </>
    );
}

export default DecodeList;