import UserService from "./UserService";
import {User, UserRegistrationForm} from "../../models";
import LocalStorage from "../storage/LocalStorage";
import {v4 as uuidv4} from 'uuid';

class UserServiceV1 implements UserService {
    private storage!: LocalStorage;

    constructor() {
        this.storage = new LocalStorage();
    }

    public async registerUser(userRegistrationForm: UserRegistrationForm): Promise<User> {
        let newUser = {
            id: uuidv4(),
            username: userRegistrationForm.username,
            password: userRegistrationForm.password,
            firstName: userRegistrationForm.firstName,
            lastName: userRegistrationForm.lastName,
            email: userRegistrationForm.email,
            mobile: userRegistrationForm.mobile
        }
        await this.storage.save("users", [...await this.getAllUsers(), newUser]);
        return newUser;
    }

    public async getAllUsers(): Promise<Array<User>> {
        return await this.storage.read("users")?? [];
    }

}

export default UserServiceV1;