import MachineService from "../../services/machine/MachineService";
import MachineServiceV1 from "../../services/machine/MachineServiceV1";

class ServiceFactory {

    public static getMachineService():MachineService {
        return new MachineServiceV1();
    }
}

export default ServiceFactory;