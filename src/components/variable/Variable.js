import {useEffect, useState} from "react";
import VinService from "../../servises/VinService";


const Variable = () => {

    const [vinList, setVinList] = useState();

    const {getVinList} = VinService();

    useEffect(() => {
        onRequest();
    }, [])

    const onRequest = () => {
        getVinList()
            .then(onListLoaded)
    }

    const onListLoaded = (list) => {
        setVinList(list);
    }

    console.log(vinList);

    /*RENDER ITEMS*/
    const renderItems = (arr) => {
        const items = arr.map(item => {
            return (
                <li className="list-group-item list-group-item-default"
                    key={item.id}>{item.name} : {item.description} : {item.group}</li>

            );
        });
        return (
            <ul className="list-group">
                {items}
            </ul>


        )
    }

    const variables = renderItems(vinList);
    /*RETURN*/
    return (
        <>
            {variables}
        </>
    );
}

export default Variable;