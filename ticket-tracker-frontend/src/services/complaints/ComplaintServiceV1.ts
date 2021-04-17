import ComplaintService from "./ComplaintService";
import {Complaint, ComplaintFormFields} from "../../models";
import LocalStorage from "../storage/LocalStorage";
import {v4 as uuidv4} from "uuid";
import moment from "moment";

class ComplaintServiceV1 implements ComplaintService {
    private storage!: LocalStorage;

    constructor() {
        this.storage = new LocalStorage();
    }

    private readonly _COMPLAINTS_KEY = "complaints";

    public async fetchAll(): Promise<Array<Complaint>> {
        return await this.storage.read(this._COMPLAINTS_KEY)?? [];
    }

    public async fetchById(complaintId: string): Promise<Complaint | undefined> {
        let complaints = await this.fetchAll();
        return complaints.find(complaint => complaint.id === complaintId);
    }

    public async save(complaintForm: ComplaintFormFields): Promise<Complaint> {
        let complaint:Complaint = {
            id: uuidv4(),
            title: complaintForm.title,
            machineId: complaintForm.machineId,
            description: complaintForm.description,
            severity: complaintForm.severity,
            createdAt: moment().toISOString(),
            modifiedAt: moment().toISOString()
        }
        let complaints = await this.fetchAll();
        await this.storage.save(this._COMPLAINTS_KEY, [...complaints, complaint]);
        return complaint;
    }

}

export default ComplaintServiceV1;