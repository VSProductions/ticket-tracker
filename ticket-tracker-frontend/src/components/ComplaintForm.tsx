import * as React from 'react';
import {Button, Card, Form} from "react-bootstrap";

const ComplaintForm:React.FunctionComponent = () => {

    return <>
        <Card>
            <Card.Header>
                <h3>File New Complaint</h3>
            </Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control placeholder={"Summary of the complaint"}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Machine</Form.Label>
                        <Form.Control as={"select"}>
                            <option>X-Ray</option>
                            <option>Monitor</option>
                            <option>Computer</option>
                            <option>Pump</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control as={"textarea"}
                                      placeholder={"Be as detailed as possible..."} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Severity</Form.Label>
                        <Form.Control as={"select"}>
                            <option value={"LOW"}>Low</option>
                            <option value={"MEDIUM"}>Medium</option>
                            <option value={"HIGH"}>High</option>
                            <option value={"CRITICAL"}>Critical</option>
                        </Form.Control>
                    </Form.Group>
                    <Button variant={"primary"}>Submit</Button>
                </Form>
            </Card.Body>
        </Card>
    </>
}

export default ComplaintForm;