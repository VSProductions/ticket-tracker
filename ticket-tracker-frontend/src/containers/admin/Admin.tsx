import * as React from 'react';
import {Nav, Navbar} from "react-bootstrap";

const Admin: React.FunctionComponent = () => {
    return <>
        <Navbar>
            <Navbar.Brand href="/#/">Ticket Tracker</Navbar.Brand>
            <Navbar.Collapse className={"justify-content-between"}>
                <Nav className={"mr-auto"}>
                    <Nav.Link href={"/#/admin/machine"}>
                        Manage Machines
                    </Nav.Link>
                    <Nav.Link href={"/#/admin/user"}>Manage Users</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    </>
}

export default Admin;