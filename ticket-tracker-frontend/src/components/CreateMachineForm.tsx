import * as React from 'react';
import {useState} from 'react';

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
        <form>

            <div className="form-group">
                <label htmlFor="machineName">Machine Name</label>
                <input type="text"
                       id="machineName"
                       className="form-control"
                       placeholder="Enter Machine Name..."
                       value={machineName}
                       onChange={(e) => setMachineName(e.currentTarget.value)}
                />
                <label htmlFor="machineDescription">Machine Description</label>
                <textarea name="machineDescription"
                          id="machineDescription"
                          value={machineDescription}
                          onChange={(e) => setMachineDescription(e.currentTarget.value)}
                          className={"form-control"}>
                </textarea>
            </div>

            <button type={"button"} className={"btn btn-primary"} onClick={handleFormSubmit}>Create</button>
        </form>
    );

}

export default CreateMachineForm;

