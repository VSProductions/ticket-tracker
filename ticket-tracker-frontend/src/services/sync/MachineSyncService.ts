import SyncService from "./SyncService";
import LocalStorage from "../storage/LocalStorage";
import {Machine} from "../../models";
import axios from "axios";

const { REACT_APP_BACKEND_SERVICE } = process.env;
class MachineSyncService implements SyncService {
    async sync(): Promise<void> {
        let machines: Array<Machine> = await LocalStorage.getInstance().read("sync_machines") ?? [];
        if (machines.length !== 0) {
            for (const machine of machines) {
                let response = await axios.post(`${REACT_APP_BACKEND_SERVICE}/api/v1/machine/`, {
                    name: machine.name,
                    description: machine.description
                });
                if (response.status === 201) {
                    console.log("machines synced successfully.");
                    await LocalStorage.getInstance().delete("sync_machines");
                }
            }
        }
    }
}

export default MachineSyncService;