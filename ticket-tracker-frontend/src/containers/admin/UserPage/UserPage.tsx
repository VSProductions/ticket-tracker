import * as React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {User} from "../../../models";
import UserRegistrationForm from "../../../components/UserRegistrationForm";


const UserPage: React.FunctionComponent = () => {

    const handleFormSubmit = (user:User) => {
        console.log(user);
    }

    return <>
        <Container>
            <Row>
                <Col>
                    <UserRegistrationForm onFormSubmit={handleFormSubmit} />
                </Col>
            </Row>
        </Container>
    </>
}

export default UserPage;