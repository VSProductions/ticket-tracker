class LocalStorage {
    private storage!: Storage;
    private static instance = new LocalStorage();

    constructor() {
        this.storage = localStorage;
    }

    public async save(key:string, obj:any): Promise<void> {
        this.storage.setItem(key, JSON.stringify(obj));
    }

    public async read(key:string):Promise<any> {
        if (this.storage.getItem(key))
            return JSON.parse(<string>this.storage.getItem(key));

        return undefined;
    }

    public static getInstance() {
        return this.instance;
    }

    public async delete(key: string):Promise<void> {
        this.storage.removeItem(key);
    }
}

export default LocalStorage;