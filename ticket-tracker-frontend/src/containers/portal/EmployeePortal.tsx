import * as React from 'react';
import {Button, Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import {useHistory} from "react-router-dom";

const EmployeePortal:React.FunctionComponent = () => {

    const history = useHistory();

    return <>
        <Navbar>
            <Navbar.Brand href="/#/">Ticket Tracker</Navbar.Brand>
            <Navbar.Collapse className={"justify-content-between"}>
                <Nav className={"mr-auto"}>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Container>
            <Row>
                <Col>
                    <Button variant={"danger"}
                            onClick={() => history.push("/portal/new-complaint")}>
                        File New Complaint
                    </Button>
                    <hr/>
                </Col>
            </Row>
        </Container>
    </>
}

export default EmployeePortal;