import MachineService from "./machine/MachineService";
import MachineServiceV1 from "./machine/MachineServiceV1";
import UserService from "./user/UserService";
import UserServiceV1 from "./user/UserServiceV1";
import ComplaintService from "./complaints/ComplaintService";
import ComplaintServiceV1 from "./complaints/ComplaintServiceV1";

class ServiceFactory {

    public static getMachineService():MachineService {
        return new MachineServiceV1();
    }

    public static getUserService():UserService {
        return new UserServiceV1();
    }

    public static getComplaintService(): ComplaintService {
        return new ComplaintServiceV1();
    }
}

export default ServiceFactory;