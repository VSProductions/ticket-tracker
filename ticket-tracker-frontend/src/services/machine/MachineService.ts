import {MachineForm} from "../../components/CreateMachineForm";
import Machine from "../../containers/admin/MachinePage/Machine";

interface MachineService {
    createMachine(machineData: MachineForm): Promise<Machine>;
}

export default MachineService;