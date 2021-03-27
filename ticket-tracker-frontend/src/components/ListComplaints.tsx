import * as React from 'react';
import {Alert, Badge, ListGroup} from "react-bootstrap";
import moment from "moment";
import {Complaint} from "../models";
import {Link} from 'react-router-dom';

interface Props {
    complaints: Array<Complaint>
}

const ListComplaints: React.FunctionComponent<Props> = (props: Props) => {
    const complaints = props.complaints;

    return <>
        <div>
            {
                complaints.length === 0 ?
                    <Alert variant={"info"}>No complaints. Great Job!</Alert> :
                    <ListGroup>
                        {
                            complaints.map((complaint, index) => (
                                <ListGroup.Item key={complaint.id}>
                                    <h4>{complaint.title}</h4>
                                    <p>
                                        {complaint.description} <br/>
                                        <span>
                                            <span className={"text-muted small"}>
                                                Date: {moment(complaint.createdAt).format("DD/MM/YYYY")}
                                            </span>
                                                <br/>
                                                <span className={"text-muted small pull-right"}>
                                                Time: {moment(complaint.createdAt).format("HH:mm")}
                                            </span>
                                        </span>
                                        <span>
                                            <Badge variant={"danger"}>{complaint.severity}</Badge>
                                        </span>
                                        <br/><br/>
                                        <span>
                                            <Link to={`/portal/complaint/${complaint.id}`}>Add Comment</Link>
                                        </span>
                                    </p>
                                </ListGroup.Item>
                            ))
                        }
                    </ListGroup>

            }
        </div>

    </>
}

export default ListComplaints;