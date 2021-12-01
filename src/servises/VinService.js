// const vin = "JN1AZ4EH7DM430111"
// const api = "https://vpic.nhtsa.dot.gov/api//vehicles/decodevin/{vin}?format=json"
const api2 = "/vehicles/getvehiclevariablelist?format=json"

class VinService {

    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    }

    getVinInfo = (vin="JN1AZ4EH7DM430111") => {
        return this.getResource(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vin}?format=json`);
    }
    getVariable = () => {
        return this.getResource("https://vpic.nhtsa.dot.gov/api/vehicles/getvehiclevariablelist?format=json")
    }
}

export default VinService;