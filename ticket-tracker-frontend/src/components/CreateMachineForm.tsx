import * as React from 'react';
import {useRef, useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {MachineForm, Manufacturer} from "../models";

interface Props {
    onFormSubmit: (formData: MachineForm) => void
    manufacturers: Array<Manufacturer>
}
const CreateMachineForm: React.FunctionComponent<Props> = (props: Props) => {

    const [machineName, setMachineName] = useState("");
    const [machineDescription, setMachineDescription] = useState("");
    const machineNameInput = useRef<HTMLInputElement>(null);
    const manufacturer = useRef<HTMLSelectElement>(null);

    function handleFormSubmit() {
        let manufacturerIds:Array<String> = [];
        for (let i = 0; i < manufacturer.current!.selectedOptions.length; i++) {
            manufacturerIds.push(manufacturer.current!.selectedOptions[i].getAttribute("data-manufacturer-id")!);
        }

        props.onFormSubmit({
            machineName: machineName,
            machineDescription: machineDescription,
            manufacturerIds: manufacturerIds
        });

        resetForm();
    }

    const resetForm = () => {
        // reset form
        setMachineName("")
        setMachineDescription("")
        machineNameInput.current?.focus();
    }

    return (
        <Form>
            <Form.Group>
                <Form.Label>Machine Name</Form.Label>
                <Form.Control type={"text"}
                              ref={machineNameInput}
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
                <Form.Control ref={manufacturer} as={"select"} multiple>
                    {
                        props.manufacturers.map(manufacturer => (
                            <option key={manufacturer.id} data-manufacturer-id={manufacturer.id}>{manufacturer.name}</option>
                        ))
                    }
                </Form.Control>
            </Form.Group>
            <Button variant={"primary"} onClick={handleFormSubmit}>Create</Button>
        </Form>
    );

}

export default CreateMachineForm;

