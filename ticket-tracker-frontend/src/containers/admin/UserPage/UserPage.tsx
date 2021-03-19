import * as React from 'react';
import {useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import AddUserRole from "../../../components/AddUserRole";
import {User, UserRegistrationForm as UserForm} from "../../../models";
import CreateUserForm from "../../../components/CreateUserForm";
import ServiceFactory from "../../../services/ServiceFactory";
import '../../../global-style.css';
import ListUsers from "../../../components/ListUsers";


const UserPage: React.FunctionComponent = () => {

    const [users, setUsers] = useState<Array<User>>([]);
    const handleFormSubmit = (user: any) => {
        console.log(user);
    }

    const handleUserFormSubmit = async (userRegistrationForm: UserForm) => {
        let registeredUser = await ServiceFactory.getUserService().registerUser(userRegistrationForm);
        setUsers([...users, registeredUser]);
    }

    useState(async () => {
        setUsers(await ServiceFactory.getUserService().getAllUsers());
    });

    return <>
        <Container>
            <Row>
                <Col>
                    <ListUsers users={users} />
                </Col>
                <Col>
                    <AddUserRole onFormSubmit={handleFormSubmit}/>
                </Col>
                <Col>
                    <CreateUserForm onFormSubmit={handleUserFormSubmit}/>
                </Col>
            </Row>
        </Container>
    </>
}

export default UserPage;