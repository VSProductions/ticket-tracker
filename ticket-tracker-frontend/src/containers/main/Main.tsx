import * as React from 'react';
import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import {useHistory} from 'react-router-dom';
import LoginForm from "../../components/LoginForm";
import {LoginFormFields} from "../../models";

const Main:React.FunctionComponent = () => {

    const history = useHistory();

    const handleEmployeeLogin = (loginForm: LoginFormFields) => {
        history.push("/portal");
    }

    const handleAdminLogin = (loginForm: LoginFormFields) => {
        history.push("/admin");
    }

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
                    <LoginForm
                        formTitle={"Employee Login"}
                        usernameTitle={"Username"}
                        passwordTitle={"Password"}
                        loginBtnTitle={"Login"}
                        onFormSubmit={handleEmployeeLogin}
                    />
                </Col>
                <Col>
                    <LoginForm
                        formTitle={"Admin Login"}
                        usernameTitle={"Username"}
                        passwordTitle={"Password"}
                        loginBtnTitle={"Login"}
                        onFormSubmit={handleAdminLogin}
                    />
                </Col>
            </Row>
        </Container>
    </>
}

export default Main;