import * as React from 'react';
import {Button, Card, Form} from "react-bootstrap";
import {useState} from "react";
import {ComplaintFormFields} from "../models";

interface Props {
    onFormSubmit: (complaintForm:ComplaintFormFields) => void
}
const ComplaintForm:React.FunctionComponent<Props> = (props:Props) => {

    const [title, setTitle] = useState("");
    const [machine, setMachine] = useState("");
    const [description, setDescription] = useState("");
    const [severity, setSeverity] = useState("");

    function resetForm() {
        setTitle("");
        setDescription("");
        setSeverity("");
        setMachine("");
    }

    const handleFormSubmit = () => {
        props.onFormSubmit({
            title: title,
            description: description,
            machine: machine,
            severity: severity
        });

        resetForm();
    }

    return <>
        <Card>
            <Card.Header>
                <h3>File New Complaint</h3>
            </Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control placeholder={"Summary of the complaint"}
                                      value={title} onChange={(e) => setTitle(e.currentTarget.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Machine</Form.Label>
                        <Form.Control as={"select"} value={machine}
                                      onChange={(e) => setMachine(e.currentTarget.value)}>
                            <option>X-Ray</option>
                            <option>Monitor</option>
                            <option>Computer</option>
                            <option>Pump</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control as={"textarea"}
                                      placeholder={"Be as detailed as possible..."}
                                      value={description}
                                      onChange={(e) => setDescription(e.currentTarget.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Severity</Form.Label>
                        <Form.Control as={"select"} onChange={(e) => setSeverity(e.currentTarget.value)}>
                            {
                                [{id: "LOW", text: "Low"}, {id:"MEDIUM", text: "Medium"}, {id:"HIGH", text:"High"}, {id:"CRITICAL", text:"Critical"}]
                                    .map(s => {
                                        if (s.id === severity) {
                                            return <option value={severity} selected>{s.text}</option>
                                        } else {
                                            return <option value={s.id}>{s.text}</option>
                                        }
                                    })
                            }
                        </Form.Control>
                    </Form.Group>
                    <Button variant={"primary"} onClick={handleFormSubmit}>Submit</Button>
                </Form>
            </Card.Body>
        </Card>
    </>
}

export default ComplaintForm;