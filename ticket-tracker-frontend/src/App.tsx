import React from 'react';
import './App.css';
import {HashRouter as Router, Route} from "react-router-dom";
import Admin from "./containers/admin/Admin";
import MachinePage from "./containers/admin/MachinePage/MachinePage";
import UserPage from "./containers/admin/UserPage/UserPage";
import {Col, Container, Row} from "react-bootstrap";
import LoginForm from "./components/LoginForm";
import {LoginFormFields} from "./models";

const App: React.FunctionComponent = () => {

    const handleFormSubmit = (loginForm: LoginFormFields) => {
        console.log(loginForm);
    }

    return (
        <Router>
            <Route patt={"/"} exact>
                <Container>
                    <Row>
                        <Col>
                            <LoginForm
                                formTitle={"Employee Login"}
                                usernameTitle={"Username"}
                                passwordTitle={"Password"}
                                loginBtnTitle={"Login"}
                                onFormSubmit={handleFormSubmit}
                            />
                        </Col>
                        <Col>
                            <LoginForm
                                formTitle={"Admin Login"}
                                usernameTitle={"Username"}
                                passwordTitle={"Password"}
                                loginBtnTitle={"Login"}
                                onFormSubmit={handleFormSubmit}
                            />
                        </Col>
                    </Row>
                </Container>
            </Route>
            <Route path={"/admin"}>
                <Admin />
                <Route key={1} path={`/admin/machine`} component={() => <MachinePage />} />
                <Route key={2} path={`/admin/user`} exact component={() => <UserPage />} />
            </Route>
        </Router>
    );
}

export default App;
