import * as React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ComplaintForm from "../../../components/ComplaintForm";
import {ComplaintFormFields} from "../../../models";
import ServiceFactory from "../../../services/ServiceFactory";

const AddNewComplaintPage:React.FunctionComponent = () => {

    const handleFormSubmit = async (complaintForm: ComplaintFormFields) => {
        await ServiceFactory
            .getComplaintService()
            .save(complaintForm);
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