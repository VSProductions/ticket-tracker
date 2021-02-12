import * as React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import CreateMachineForm from "../../../components/CreateMachineForm";
import CreateManufacturerForm from "../../../components/CreateManufacturerForm";
import {useState} from "react";
import {Manufacturer, ManufacturerForm} from "../../../models";

const MachinePage: React.FunctionComponent  = () => {

    const [manufacturers, setManufacturers] = useState<Array<Manufacturer>>([]);

    const handleFormSubmit = (machineForm: any) => {
        console.log("Form Data: ", machineForm);
    }

    const handleManufacturerFormSubmit = (manufacturerForm: ManufacturerForm) => {
        setManufacturers([...manufacturers,
            {
                id: "random",
                name: manufacturerForm.manufacturerName,
                description: manufacturerForm.manufacturerDescription
            }])
    }

    return <Container>
        <Row>
            <Col>
                <CreateManufacturerForm onFormSubmit={handleManufacturerFormSubmit} />
            </Col>
            <Col>
                <CreateMachineForm onFormSubmit={handleFormSubmit} manufacturers={manufacturers} />
            </Col>
        </Row>
    </Container>
}

export default MachinePage;