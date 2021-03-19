import React from 'react';
import './App.css';
import {HashRouter as Router, Route} from "react-router-dom";
import Admin from "./containers/admin/Admin";
import MachinePage from "./containers/admin/MachinePage/MachinePage";
import UserPage from "./containers/admin/UserPage/UserPage";
import Main from "./containers/main/Main";
import EmployeePortal from "./containers/portal/EmployeePortal";
import AddNewComplaintPage from "./containers/portal/complaint/AddNewComplaintPage";
import ListComplaintPage from "./containers/portal/complaint/ListComplaintPage";

const App: React.FunctionComponent = () => {

    return (
        <Router>
            <Route path={"/"} exact>
                <Main />
            </Route>
            <Route path={"/portal"}>
                <EmployeePortal />
                <Route key={1} exact path={"/portal"}>
                    <ListComplaintPage />
                </Route>
                <Route key={2} path={"/portal/new-complaint"}>
                    <AddNewComplaintPage />
                </Route>
            </Route>
            <Route path={"/admin"}>
                <Admin />
                <Route key={1} path={`/admin/machine`} component={() => <MachinePage />} />
                <Route key={2} path={`/admin/user`} exact component={() => <UserPage />} />
            </Route>
        </Router>
    );
}

export default App;
