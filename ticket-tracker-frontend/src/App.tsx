import React from 'react';
import './App.css';
import CreateMachineForm, {MachineForm} from "./components/CreateMachineForm";
import CreateManufacturerForm from "./components/CreateManufacturerForm";

const App: React.FunctionComponent = () => {

    const handleFormSubmit = (machineForm: any) => {
        console.log("Form Data: ", machineForm);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <CreateMachineForm onFormSubmit={handleFormSubmit}/>
                    <br/>
                    <hr/>
                    <CreateManufacturerForm onFormSubmit={handleFormSubmit} />
                </div>
            </div>
        </div>
    );
}

export default App;
