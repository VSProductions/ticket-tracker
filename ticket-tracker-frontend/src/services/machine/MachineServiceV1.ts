import {MachineForm} from "../../components/CreateMachineForm";
import axios from 'axios';
import MachineService from "./MachineService";
import {Machine} from "../../models";

const SERVICE_URL = "http://localhost:8000";

class MachineServiceV1 implements MachineService {

    public async createMachine(machineData: MachineForm): Promise<Machine> {
        let response = await axios.post(`${SERVICE_URL}/api/v1/machine`, JSON.stringify(machineData));
        if (201 === response.status) {

        }

        throw Error(`Error creating machine in the backend! Status Code: ${response.status}`);
    }
}

export default MachineServiceV1;