import MachineService from "./MachineService";
import {Machine, MachineForm, Manufacturer, ManufacturerForm} from "../../models";
import {v4 as uuidv4} from 'uuid';
import moment from "moment";

const SERVICE_URL = "http://localhost:8000";

class MachineServiceV1 implements MachineService {
    public async createMachine(machineData: MachineForm): Promise<Machine> {
        let machines:Array<Machine> = JSON.parse(localStorage.getItem("machines")?? "[]");

        let machine = {
            id: uuidv4(),
            name: machineData.machineName,
            description: machineData.machineDescription,
            dateCreated: moment().format(),
            dateModified: moment().format()
        };
        machines.push(machine);
        localStorage.setItem("machines", JSON.stringify(machines));
        return machine;
        // let response = await axios.post(`${SERVICE_URL}/api/v1/machine`, JSON.stringify(machineData));
        // if (201 === response.status) {
        //
        // }
        //
        // throw Error(`Error creating machine in the backend! Status Code: ${response.status}`);
    }

    public async getAllMachines(): Promise<Array<Machine>> {
        let machines:Array<Machine> = JSON.parse(localStorage.getItem("machines")?? "[]");
        return machines;
        // let response = await axios.get(`${SERVICE_URL}/api/v1/machine`);
        // if (200 === response.status) {
        //      let data = response.data;
        //      console.log(data);
        // }
        // return [];
    }

    public async createManufacturer(manufacturerData: ManufacturerForm): Promise<Manufacturer> {
        let manufacturers: Array<Manufacturer> = await this.getAllManufacturers();
        let manufacturer = {
            id: uuidv4(),
            name: manufacturerData.manufacturerName,
            description: manufacturerData.manufacturerDescription
        };
        manufacturers.push(manufacturer);
        localStorage.setItem("manufacturers", JSON.stringify(manufacturers));
        return manufacturer;
    }

    public async getAllManufacturers(): Promise<Array<Manufacturer>> {
        let manufacturers: Array<Manufacturer> = JSON.parse(localStorage.getItem("manufacturers")?? "[]");
        return manufacturers;
    }
}

export default MachineServiceV1;