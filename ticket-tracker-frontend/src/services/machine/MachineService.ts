import {MachineForm} from "../../components/CreateMachineForm";
import {Machine} from "../../models";

interface MachineService {
    createMachine(machineData: MachineForm): Promise<Machine>;
}

export default MachineService;