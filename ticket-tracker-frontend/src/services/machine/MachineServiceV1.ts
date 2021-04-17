import MachineService from "./MachineService";
import {Machine, MachineForm, Manufacturer, ManufacturerForm} from "../../models";
import axios from "axios";

const { REACT_APP_BACKEND_SERVICE } = process.env;
const MACHINE_ENDPOINT = `${REACT_APP_BACKEND_SERVICE}/api/v1/machine/`;
const MANUFACTURER_ENDPOINT = `${REACT_APP_BACKEND_SERVICE}/api/v1/manufacturer/`;

class MachineServiceV1 implements MachineService {

    public async createMachine(machineData: MachineForm): Promise<Machine> {
        let response = await axios.post(MACHINE_ENDPOINT, {
            name: machineData.machineName,
            description: machineData.machineDescription
        });

        if (response.status !== 201) {
            // TODO: write code to save offline and sync later
            console.log(response);
            throw new Error("Error while posting machine data to backend.");
        }
        let savedMachine:Machine = response.data;

        // save manufacturers for this machine
        let endpoint = `${MACHINE_ENDPOINT}${savedMachine.slug}/manufacturers/`;
        machineData.manufacturerIds.forEach(manufacturer => {
            axios.post(endpoint, {
                slug: manufacturer
            });
        });

        return savedMachine;
    }

    public async getAllMachines(): Promise<Array<Machine>> {
        let response = await axios.get(MACHINE_ENDPOINT);
        if (response.status !== 200) {
            // TODO: write code to read from offline data
            throw new Error("Error while reading machines from backend.");
        }

        return response.data;
    }

    public async createManufacturer(manufacturerData: ManufacturerForm): Promise<Manufacturer> {
        let response = await axios.post(MANUFACTURER_ENDPOINT, {
            name: manufacturerData.manufacturerName,
            description: manufacturerData.manufacturerDescription
        });

        if (response.status !== 201) {
            // TODO: write code to save manufacturer offline to sync later
            console.log(response);
            throw new Error("Error while creating manufacturer.")
        }

        return response.data;
    }

    public async getAllManufacturers(): Promise<Array<Manufacturer>> {
        let response = await axios.get(MANUFACTURER_ENDPOINT);

        if (response.status !== 200) {
            // TODO: write code to read offline data
            console.log(response);
            throw new Error("Error encountered while reading manufacturers.")
        }

        return response.data;
    }
}

export default MachineServiceV1;