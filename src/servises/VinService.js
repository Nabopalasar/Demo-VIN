

class VinService {
    _apiBase = "https://vpic.nhtsa.dot.gov/api/vehicles";
    _format = "?format=json";

    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    }

    getVinInfo = async (vin="JN1AZ4EH7DM430111") => {
        const res = await this.getResource(`${this._apiBase}/decodevin/${vin}${this._format}`);
        return res.Results.map(this._transformVariables)
    }
    getVariable = () => {
        return this.getResource(`${this._apiBase}/getvehiclevariablelist${this._format}`);
    }

    _transformVariables = (arr) => {
        return {
            id: arr.VariableId,
            variable: arr.Variable,
            value: arr.Value,

        }
    }
}

export default VinService;