import * as React from 'react';
import {Machine} from "../models";
import {Alert, ListGroup} from "react-bootstrap";

interface Props {
    machines: Array<Machine>
}

const ListMachines: React.FunctionComponent<Props> = (props:Props) => {

    return <>
        {
            props.machines.length === 0 ?
                <Alert variant={"info"}>There are no machines in the database.</Alert> :
                <>
                    <h3>Available Machines</h3>
                    <ListGroup>
                        {
                            props.machines.map((machine, index) => (
                                <ListGroup.Item key={index}>
                                    {machine.name}
                                </ListGroup.Item>
                            ))
                        }
                    </ListGroup>
                </>
        }
    </>
}

export default ListMachines;