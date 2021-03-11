class LocalStorage {
    private storage!: Storage;

    constructor() {
        this.storage = localStorage;
    }

    public save(key:string, obj:any) {
        this.storage.setItem(key, JSON.stringify(obj));
    }

    public read(key:string):any {
        if (this.storage.getItem(key))
            return JSON.parse(<string>this.storage.getItem(key));

        return undefined;
    }
}

export default LocalStorage;