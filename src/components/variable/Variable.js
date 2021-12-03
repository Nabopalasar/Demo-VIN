import {useEffect, useState} from "react";
import VinService from "../../servises/VinService";


const Variable = () => {

    const [vinList, setVinList] = useState([]);

    const {getVinList} = VinService();

    useEffect(() => {
        onRequest();
        // eslint-disable-next-line
    }, [])

    const onRequest = () => {
        getVinList()
            .then(onListLoaded)
    }

    const onListLoaded = (list) => {
        setVinList(list);
    }

    console.log(vinList);



    // const variables = renderItems(vinList);
    /*RETURN*/
    // return null
    return (
        <>
            <ul className="list-group">
            {
                vinList.map(
                    item =>
                    <li className="list-group-item list-group-item-default"
                        key={item.id}>{item.name} : {item.description} : {item.group}</li>
                )
            }
            </ul>
        </>
    );
}

export default Variable;