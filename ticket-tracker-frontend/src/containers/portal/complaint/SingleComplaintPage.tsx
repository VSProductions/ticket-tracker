import * as React from 'react';
import {useState} from 'react';
import {Alert, Card, Col, Container, Row} from "react-bootstrap";
import {Link, useParams} from 'react-router-dom';
import {Complaint} from "../../../models";
import ServiceFactory from "../../../services/ServiceFactory";

const SingleComplaintPage:React.FunctionComponent = () => {

    const {complaintId} = useParams<{complaintId:string}>();
    const [complaint, setComplaint] = useState<Complaint|undefined>();

    useState(async () => {
        let complaint = await ServiceFactory
            .getComplaintService()
            .fetchById(complaintId);
        setComplaint(complaint);
    })

    return <>
        <Container>
            <Row>
                <Col>
                    <div><Link to={"/portal"}>Go Back</Link></div>
                </Col>
            </Row>
            <Row>
                <Col>
                    {
                        complaint ?
                            <>
                                <Card>
                                    <Card.Header>
                                        <h3>{complaint.title}</h3>
                                    </Card.Header>
                                    <Card.Body>
                                        <p>{complaint.description}</p>
                                    </Card.Body>
                                </Card>
                            </> :
                            <Alert variant={"danger"}>Oops... Didn't found what you are looking for :/</Alert>
                    }
                </Col>
            </Row>
        </Container>
    </>
}

export default SingleComplaintPage;