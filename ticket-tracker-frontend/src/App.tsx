import React from 'react';
import './App.css';
import CreateMachineForm, {MachineForm} from "./components/CreateMachineForm";

const App: React.FunctionComponent = () => {

    const handleFormSubmit = (machineForm: MachineForm) => {
        console.log("Form Data: ", machineForm);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <CreateMachineForm onFormSubmit={handleFormSubmit}/>
                </div>
            </div>
        </div>
    );
}

export default App;
