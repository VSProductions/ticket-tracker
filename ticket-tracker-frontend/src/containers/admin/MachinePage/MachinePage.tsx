import * as React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import CreateMachineForm from "../../../components/CreateMachineForm";
import CreateManufacturerForm from "../../../components/CreateManufacturerForm";
import {useState} from "react";
import {Machine, Manufacturer, ManufacturerForm} from "../../../models";
import ListMachines from "../../../components/ListMachines";
import ServiceFactory from "../ServiceFactory";
import MachineService from "../../../services/machine/MachineService";

const MachinePage: React.FunctionComponent  = () => {

    const [manufacturers, setManufacturers] = useState<Array<Manufacturer>>([]);
    const [machines, setMachines] = useState<Array<Machine>>([]);

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

    useState(async () => {
        let machineService:MachineService = ServiceFactory.getMachineService();
        setMachines(await machineService.getAllMachines());
    })

    return <Container>
        <Row>
            <Col>
                <ListMachines machines={machines} />
            </Col>
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