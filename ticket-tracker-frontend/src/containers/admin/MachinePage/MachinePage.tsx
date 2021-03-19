import * as React from 'react';
import {useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import CreateMachineForm from "../../../components/CreateMachineForm";
import CreateManufacturerForm from "../../../components/CreateManufacturerForm";
import {Machine, Manufacturer, ManufacturerForm} from "../../../models";
import ListMachines from "../../../components/ListMachines";
import ServiceFactory from "../../../services/ServiceFactory";
import MachineService from "../../../services/machine/MachineService";

const MachinePage: React.FunctionComponent  = () => {

    const [manufacturers, setManufacturers] = useState<Array<Manufacturer>>([]);
    const [machines, setMachines] = useState<Array<Machine>>([]);

    const handleMachineFormSubmit = async (machineForm: any) => {
        console.log("Form Data: ", machineForm);
        let machine = await ServiceFactory.getMachineService().createMachine(machineForm);
        setMachines([...machines, machine]);
    }

    const handleManufacturerFormSubmit = async (manufacturerForm: ManufacturerForm) => {
        let manufacturer = await ServiceFactory.getMachineService().createManufacturer(manufacturerForm);
        setManufacturers([...manufacturers, manufacturer])
    }

    useState(async () => {
        let machineService:MachineService = ServiceFactory.getMachineService();
        setMachines(await machineService.getAllMachines());
        setManufacturers(await machineService.getAllManufacturers());
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
                <CreateMachineForm onFormSubmit={handleMachineFormSubmit} manufacturers={manufacturers} />
            </Col>
        </Row>
    </Container>
}

export default MachinePage;