import * as React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import UserRegistrationForm from "../../../components/UserRegistrationForm";
import AddUserRole from "../../../components/AddUserRole";


const UserPage: React.FunctionComponent = () => {

    const handleFormSubmit = (user:any) => {
        console.log(user);
    }

    return <>
        <Container>
            <Row>
                <Col>
                    <AddUserRole onFormSubmit={handleFormSubmit}/>
                </Col>
                <Col>
                    <UserRegistrationForm onFormSubmit={handleFormSubmit} />
                </Col>
            </Row>
        </Container>
    </>
}

export default UserPage;