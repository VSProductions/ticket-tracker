import * as React from 'react';
import CreateMachineForm, {MachineForm} from "../../../components/CreateMachineForm";
import ServiceFactory from "../ServiceFactory";
import MachineService from "../../../services/machine/MachineService";
import Machine from "./Machine";
import {Col, Container, Row} from "react-bootstrap";

const CreateMachinePage: React.FunctionComponent = () => {

    const handleFormSubmit = async (machineForm: MachineForm) => {
        let machineService: MachineService = ServiceFactory.getMachineService();
        let machine:Machine = await machineService.createMachine(machineForm);
    }

    return (
        <Container>
            <Row>
                <Col>
                    <CreateMachineForm onFormSubmit={handleFormSubmit} />
                </Col>
            </Row>
        </Container>
    )
}