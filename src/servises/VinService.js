

const  VinService = () => {
    const _apiBase = "https://vpic.nhtsa.dot.gov/api/vehicles";
    const _format = "?format=json";

    const getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    }

    const getVinInfo = async (vin="JN1AZ4EH7DM430111") => {
        const res = await getResource(`${_apiBase}/decodevin/${vin}${_format}`);
        return res.Results.map(_transformVariables)
    }
    const _transformVariables = (arr) => {
        return {
            id: arr.VariableId,
            variable: arr.Variable,
            value: arr.Value,
        }
    }

    return {
        getVinInfo
    }
}

export default VinService;