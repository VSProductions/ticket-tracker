import * as React from 'react';
import {useState} from "react";

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
        <form>

            <div className="form-group">
                <label htmlFor="manufacturerName">Manufacturer Name</label>
                <input type="text"
                       id="manufacturerName"
                       className="form-control"
                       placeholder="Enter manufacturer Name..."
                       value={manufacturerName}
                       onChange={(e) => setManufacturerName(e.currentTarget.value)}
                />
                <label htmlFor="manufacturerDescription">Manufacturer Description</label>
                <textarea name="manufacturerDescription"
                          id="manufacturerDescription"
                          value={manufacturerDescription}
                          onChange={(e) => setManufacturerDescription(e.currentTarget.value)}
                          className={"form-control"}>
                </textarea>
            </div>

            <button type={"button"} className={"btn btn-primary"} onClick={handleFormSubmit}>Create</button>
        </form>
    );
}

export default ManufacturerCreateForm;