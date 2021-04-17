import SyncService from "./SyncService";
import MachineSyncService from "./MachineSyncService";

class SyncOrchestrator {

    private interval:number | undefined;

    private syncServices:Array<SyncService> = [
        new MachineSyncService()
    ];

    public async sync():Promise<void> {
        this.interval = window.setInterval(() => {
            console.log("Syncing...");
            this.syncServices.forEach(service => service.sync());
        }, 5000);
    }

}

export default SyncOrchestrator;