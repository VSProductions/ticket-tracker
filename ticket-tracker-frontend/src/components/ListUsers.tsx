import * as React from 'react';
import {Alert, ListGroup} from "react-bootstrap";
import {User} from "../models";

interface Props {
    users: Array<User>
}
const ListUsers:React.FunctionComponent<Props> = (props:Props) => {

    const users = props.users;

    return <>
        {
            users.length === 0 ?
                <Alert variant={"info"}>There are no users in the database.</Alert> :
                <>
                    <h3>Registered Users</h3>
                    <ListGroup>
                        {
                            users.map(user =>
                                <ListGroup.Item>
                                    <p className={"no-padding no-margin"}>{user.firstName} {user.lastName}</p>
                                    <p className={"text-muted small"}>{user.email}</p>
                                </ListGroup.Item>
                            )
                        }
                    </ListGroup>
                </>
        }
    </>
}

export default ListUsers;