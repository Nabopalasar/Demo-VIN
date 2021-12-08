import {useEffect, useState} from "react";
import VinService from "../../servises/VinService";


const Variables = () => {

    const [vinList, setVinList] = useState([]);

    const {getVinList} = VinService();

    useEffect(() => {
        onRequest();
        // eslint-disable-next-line
    }, [])

    const onRequest = () => {
        getVinList()
            .then(onListLoaded);
    }

    const onListLoaded = (list) => {
        setVinList(list);
    }
// заготовка под открытие в новом табе
    const openInNewWindow = (id) => {
        if (id) {
            window.open(`http://localhost:3000/variables/${id}`, "_blank");
        }
    }

    return (
        <>
            <div className="accordion accordion-flush py-5" id="accordionFlushExample">
                {
                    vinList.map(item =>
                        <div className="accordion-item  bg-light shadow" key={item.id}>
                            <h2 className="accordion-header" id={`flush-heading${item.id}`}>
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target={`#flush-collapse${item.id}`} aria-expanded="false"
                                        aria-controls={`flush-collapse${item.id}`}>
                                    <strong>{item.name}</strong>
                                    {/*заготовка под открытие в новом табе*/}
                                    <div onClick={() => openInNewWindow(item.id)}>
                                    </div>
                                </button>
                            </h2>

                            <div id={`flush-collapse${item.id}`} className="accordion-collapse collapse"
                                 aria-labelledby={`flush-heading${item.id}`} data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <span className="text-secondary">{`Group: ${item.group}`}</span> <br/>
                                    <p className="mt-3 lh-sm">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
}

export default Variables;