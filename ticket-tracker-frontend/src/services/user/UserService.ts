import {User, UserRegistrationForm} from "../../models";

interface UserService {
    registerUser(userRegistrationForm: UserRegistrationForm): Promise<User>;

    getAllUsers(): Promise<Array<User>>;
}

export default UserService;