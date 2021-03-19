import {Complaint, ComplaintFormFields} from "../../models";

interface ComplaintService {
    save(complaintForm: ComplaintFormFields): Promise<Complaint>
    fetchAll():Promise<Array<Complaint>>

    fetchById(complaintId: string):Promise<Complaint | undefined>
}

export default ComplaintService;