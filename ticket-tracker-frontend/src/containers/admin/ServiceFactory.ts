import MachineService from "../../services/machine/MachineService";
import MachineServiceV1 from "../../services/machine/MachineServiceV1";
import UserService from "../../services/user/UserService";
import UserServiceV1 from "../../services/user/UserServiceV1";

class ServiceFactory {

    public static getMachineService():MachineService {
        return new MachineServiceV1();
    }

    public static getUserService():UserService {
        return new UserServiceV1();
    }
}

export default ServiceFactory;