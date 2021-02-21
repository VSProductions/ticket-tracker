import React from 'react';
import './App.css';
import {Nav, Navbar} from "react-bootstrap";
import {HashRouter as Router, Route} from "react-router-dom";
import MachinePage from "./containers/admin/MachinePage/MachinePage";
import UserPage from "./containers/admin/UserPage/UserPage";

const App: React.FunctionComponent = () => {

    return (
        <Router>
            <Navbar>
                <Navbar.Brand href="/#/">Ticket Tracker</Navbar.Brand>
                <Navbar.Collapse className={"justify-content-between"}>
                    <Nav className={"mr-auto"}>
                        <Nav.Link href={"/#/machine"}>
                            Manage Machines
                        </Nav.Link>
                        <Nav.Link href={"/#/user"}>Manage Users</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Route path={"/machine"} exact component={() => <MachinePage />} />
            <Route path={"/user"} exact component={() => <UserPage />} />
        </Router>

    );
}

export default App;
