import {Machine, MachineForm, Manufacturer, ManufacturerForm} from "../../models";

interface MachineService {
    createMachine(machineData: MachineForm): Promise<Machine>;
    getAllMachines():Promise<Array<Machine>>
    createManufacturer(manufacturerData: ManufacturerForm): Promise<Manufacturer>
    getAllManufacturers(): Promise<Array<Manufacturer>>;
}

export default MachineService;