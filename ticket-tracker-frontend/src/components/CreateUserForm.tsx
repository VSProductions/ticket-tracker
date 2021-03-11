import * as React from 'react';
import {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {UserRegistrationForm} from "../models";

interface Props {
    onFormSubmit: (user:UserRegistrationForm) => void
}
const CreateUserForm:React.FunctionComponent<Props> = (props:Props) => {

    const [user, setUser] = useState<UserRegistrationForm>({
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        mobile: "",
        email: "",
    });

    const handleChange = (name: string, value: string) => {
        setUser({...user, [name]: value})
    }

    const handleOnClick = () => {
        props.onFormSubmit(user);
    }

    return <>
        <h3>Register New User</h3>
        <Form>
            <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control
                    required={true}
                    name={"username"}
                    onChange={e => handleChange(e.currentTarget.name, e.currentTarget.value)}
                    value={user.username}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    required={true}
                    name={"password"}
                    type={"password"}
                    onChange={e => handleChange(e.currentTarget.name, e.currentTarget.value)}
                    value={user.password}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                    required={true}
                    name={"firstName"}
                    onChange={e => handleChange(e.currentTarget.name, e.currentTarget.value)}
                    value={user.firstName}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                    required={true}
                    name={"lastName"}
                    onChange={e => handleChange(e.currentTarget.name, e.currentTarget.value)}
                    value={user.lastName}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type={"email"}
                    name={"email"}
                    onChange={e => handleChange(e.currentTarget.name, e.currentTarget.value)}
                    value={user.email}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Mobile</Form.Label>
                <Form.Control
                    required={true}
                    name={"mobile"}
                    onChange={e => handleChange(e.currentTarget.name, e.currentTarget.value)}
                    value={user.mobile}
                />
            </Form.Group>
            <Button variant={"primary"} onClick={handleOnClick}>Register User</Button>
        </Form>
    </>
}

export default CreateUserForm;