import * as React from 'react';
import {useState} from 'react';
import {Button, Form} from "react-bootstrap";

export interface MachineForm {
    machineId?: string
    machineName: string
    machineDescription: string
}
interface Props {
    onFormSubmit: (formData: MachineForm) => void
}
const CreateMachineForm: React.FunctionComponent<Props> = (props: Props) => {

    const [machineName, setMachineName] = useState("");
    const [machineDescription, setMachineDescription] = useState("");

    function handleFormSubmit() {
        props.onFormSubmit({
            machineName: machineName,
            machineDescription: machineDescription
        });
    }

    return (
        <Form>
            <Form.Group>
                <Form.Label>Machine Name</Form.Label>
                <Form.Control type={"text"}
                              autoComplete={"off"}
                              id={"machineName"}
                              placeholder={"Enter machine name..."}
                              value={machineName}
                              onChange={(e) => setMachineName(e.currentTarget.value)} />

            </Form.Group>
            <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control as={"textarea"}
                    rows={3}
                    id={"machineDescription"}
                    value={machineDescription}
                    onChange={(e) => setMachineDescription(e.currentTarget.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Manufacturer</Form.Label>
                <Form.Control as={"select"} multiple>
                    <option>Hitachi</option>
                    <option>Philips</option>
                    <option>Sony</option>
                </Form.Control>
            </Form.Group>
            <Button variant={"primary"} onClick={handleFormSubmit}>Create</Button>
        </Form>
    );

}

export default CreateMachineForm;

