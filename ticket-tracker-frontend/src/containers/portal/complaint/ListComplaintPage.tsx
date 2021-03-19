import * as React from 'react';
import {useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Complaint} from "../../../models";
import ServiceFactory from "../../../services/ServiceFactory";
import ListComplaints from "../../../components/ListComplaints";

const ListComplaintPage:React.FunctionComponent = () => {

    const [complaints, setComplaints] = useState<Array<Complaint>>([]);

    useState(async () => {
        let complaints:Array<Complaint> = await ServiceFactory.getComplaintService().fetchAll();
        console.log(complaints);
        setComplaints(complaints);
    });

    return <>
        <Container>
            <Row>
                <Col>
                    <ListComplaints complaints={complaints} />
                </Col>
            </Row>
        </Container>
    </>
}

export default ListComplaintPage;