import * as React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ComplaintForm from "../../../components/ComplaintForm";
import {ComplaintFormFields} from "../../../models";

const AddNewComplaintPage:React.FunctionComponent = () => {

    const handleFormSubmit = (complaintForm: ComplaintFormFields) => {
        console.log(complaintForm)
    }

    return <Container>
        <Row>
            <Col>
                <ComplaintForm onFormSubmit={handleFormSubmit} />
            </Col>
        </Row>
    </Container>
}

export default AddNewComplaintPage;