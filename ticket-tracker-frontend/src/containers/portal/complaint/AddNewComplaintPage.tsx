import * as React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ComplaintForm from "../../../components/ComplaintForm";

const AddNewComplaintPage:React.FunctionComponent = () => {

    return <Container>
        <Row>
            <Col>
                <ComplaintForm />
            </Col>
        </Row>
    </Container>
}

export default AddNewComplaintPage;