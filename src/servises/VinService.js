

const  VinService = () => {
    const _apiBase = "https://vpic.nhtsa.dot.gov/api/vehicles";
    const _format = "?format=json";

    /*GET*/
    const getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    }

    const getVinInfo = async (vin) => {
        const res = await getResource(`${_apiBase}/decodevin/${vin}${_format}`);
        return res.Results.map(_transformVariables);
    }
    const getVinList = async () => {
        const res = await getResource(`${_apiBase}/getvehiclevariablelist${_format}`);
        return res.Results.map(_transformVariablesList);
    }
    /*TRANSFORM JSON*/
    const _transformVariables = (arr) => {
        return {
            id: arr.VariableId,
            variable: arr.Variable,
            value: arr.Value,
        }
    }

    const _transformVariablesList = (arr) => {
        const transformDescr = arr.Description.replace(/<!--[\s\S]*?--!?>/g, "").replace(/<\/?[a-z][^>]*(>|$)/gi, "")
        return {
            id: arr.ID,
            description: transformDescr,
            group: arr.GroupName,
            name: arr.Name
        }
    }

    /*RETURN*/
    return {
        getVinInfo,
        getVinList
    }
}

export default VinService;