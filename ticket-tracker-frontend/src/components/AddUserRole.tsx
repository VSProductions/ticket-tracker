import * as React from  'react';
import {Form, OverlayTrigger} from "react-bootstrap";

const AddUserRole: React.FunctionComponent = () => {
    return <>
        <h3>Add User Role</h3>
        <Form>
            <Form.Group>
                <Form.Label>Select User</Form.Label>
            </Form.Group>
        </Form>
    </>
}

export default AddUserRole;