import * as React from 'react';
import {useRef, useState} from 'react';
import {Button, Card, Form} from "react-bootstrap";
import {Role, UserMeta} from "../models";

interface Props {
    onFormSubmit: (userMeta: UserMeta) => void
}
const AddUserRole: React.FunctionComponent<Props> = (props: Props) => {

    const [userMeta, setUserMeta] = useState<UserMeta>({
        username: "",
        roles: []
    });

    const [roles, setRoles] = useState<Array<Role>>([]);

    const selectRolesRef = useRef<HTMLSelectElement>(null);

    const handleChange = (attr: string, val: string) => {
        setUserMeta({...userMeta, [attr]: val});
    }

    const handleSelectRole = () => {
        let roleIds: string[] = Array.from(selectRolesRef.current!.selectedOptions,
            option => String(option.value));
        let selectedRoles: Role[] = roleIds.map(roleId => roles.find(role => role.id === roleId)!)
        setUserMeta({...userMeta, roles: selectedRoles});
    }

    const handleFormSubmit = () => {
        props.onFormSubmit(userMeta);
    }

    useState(() => {
        // TODO: fetch all available roles from the backend
        let roles = [
            {id: "ADMIN", name: "Admin"},
            {id: "BIO_MEDICAL_ENGINEER", name: "Bio-Mechanical Engineer"},
            {id: "EMPLOYEE", name: "Employee"}
        ];
        setRoles(roles);
    })

    return <>
        <Card>
            <Card.Header>
                <h3>Add User Role</h3>
            </Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Enter username</Form.Label>
                        <Form.Control
                            placeholder={"Enter username of the person you wish to assign a role"}
                            name={"username"}
                            value={userMeta.username}
                            onChange={e => handleChange(e.currentTarget.name, e.currentTarget.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Select Role</Form.Label>
                        <Form.Control as={"select"} multiple
                                      ref={selectRolesRef}
                                      onChange={handleSelectRole}
                        >
                            {
                                roles.map(role => (
                                    <option key={role.id} value={role.id}>{role.name}</option>
                                ))
                            }
                        </Form.Control>
                    </Form.Group>
                    <Button variant={"primary"} onClick={handleFormSubmit}>Add</Button>
                </Form>
            </Card.Body>
        </Card>
    </>
}

export default AddUserRole;