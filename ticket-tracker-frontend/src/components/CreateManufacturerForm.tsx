import * as React from 'react';
import {useState} from 'react';
import {Button, Form} from "react-bootstrap";

interface ManufacturerForm  {
    manufacturerName: string
    manufacturerDescription: string
}
interface Props {
    onFormSubmit: (formData: ManufacturerForm) => void
}
const ManufacturerCreateForm:  React.FunctionComponent<Props> = (props: Props) => {

    const [manufacturerName, setManufacturerName] = useState("");
    const [manufacturerDescription, setManufacturerDescription] = useState("");

    const handleFormSubmit = () => {
        props.onFormSubmit({
            manufacturerName: manufacturerName,
            manufacturerDescription: manufacturerDescription
        });
    }

    return (
        <Form>
            <Form.Group>
                <Form.Label>Manufacturer Name</Form.Label>
                <Form.Control type={"text"}
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