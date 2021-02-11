import * as React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import CreateMachineForm from "../../../components/CreateMachineForm";
import CreateManufacturerForm from "../../../components/CreateManufacturerForm";

const MachinePage: React.FunctionComponent  = () => {

    const handleFormSubmit = (machineForm: any) => {
        console.log("Form Data: ", machineForm);
    }

    return <Container>
        <Row>
            <Col>
                <CreateManufacturerForm onFormSubmit={handleFormSubmit} />
            </Col>
            <Col>
                <CreateMachineForm onFormSubmit={handleFormSubmit} />
            </Col>
        </Row>
    </Container>
}

export default MachinePage;