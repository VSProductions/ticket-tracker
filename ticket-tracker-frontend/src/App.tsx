import React from 'react';
import './App.css';
import {Nav, Navbar} from "react-bootstrap";
import {HashRouter as Router, Link, Route} from "react-router-dom";
import MachinePage from "./containers/admin/MachinePage/MachinePage";

const App: React.FunctionComponent = () => {

    return (
        <Router>
            <Navbar>
                <Link to={"/"}><Navbar.Brand href="/">Ticket Tracker</Navbar.Brand></Link>
                <Navbar.Collapse className={"justify-content-between"}>
                    <Nav className={"mr-auto"}>
                        <Link to={"/machine/create"}><Nav.Link href={"/machine/create"}>Create Machine</Nav.Link></Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Route path={"/machine/create"} exact component={() => <MachinePage />} />
        </Router>

    );
}

export default App;
