import React from 'react';
import './App.css';
import CreateMachineForm from "./components/CreateMachineForm";
import CreateManufacturerForm from "./components/CreateManufacturerForm";
import {Col, Container, Row} from "react-bootstrap";

const App: React.FunctionComponent = () => {

    const handleFormSubmit = (machineForm: any) => {
        console.log("Form Data: ", machineForm);
    }

    return (
        <Container>
            <Row>
                <Col>
                    <CreateMachineForm onFormSubmit={handleFormSubmit}/>
                    <br/>
                    <hr/>
                    <CreateManufacturerForm onFormSubmit={handleFormSubmit} />
                </Col>
            </Row>
        </Container>
    );
}

export default App;
