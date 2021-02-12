import * as React from 'react';
import {useRef, useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {ManufacturerForm} from "../models";

interface Props {
    onFormSubmit: (formData: ManufacturerForm) => void
}
const ManufacturerCreateForm:  React.FunctionComponent<Props> = (props: Props) => {

    const [manufacturerName, setManufacturerName] = useState("");
    const [manufacturerDescription, setManufacturerDescription] = useState("");
    const manufacturerNameInput = useRef<HTMLInputElement>(null);

    const handleFormSubmit = () => {
        props.onFormSubmit({
            manufacturerName: manufacturerName,
            manufacturerDescription: manufacturerDescription
        });

        setManufacturerName("")
        setManufacturerDescription("")
        manufacturerNameInput.current?.focus()
    }

    return (
        <Form>
            <Form.Group>
                <Form.Label>Manufacturer Name</Form.Label>
                <Form.Control type={"text"}
                              ref={manufacturerNameInput}
                              autoComplete={"off"}
                              id={"manufacturerName"}
                              placeholder={"Enter manufacturer name..."}
                              value={manufacturerName}
                              onChange={(e) => setManufacturerName(e.currentTarget.value)}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control as={"textarea"}
                              rows={3}
                              id={"manufacturerDescription"}
                              value={manufacturerDescription}
                              onChange={(e) => setManufacturerDescription(e.currentTarget.value)} />
            </Form.Group>
            <Button variant={"primary"} onClick={handleFormSubmit}>Create</Button>
        </Form>
    );
}

export default ManufacturerCreateForm;