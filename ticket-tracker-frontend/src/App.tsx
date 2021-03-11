import React from 'react';
import './App.css';
import {HashRouter as Router, Route} from "react-router-dom";
import Admin from "./containers/admin/Admin";
import MachinePage from "./containers/admin/MachinePage/MachinePage";
import UserPage from "./containers/admin/UserPage/UserPage";

const App: React.FunctionComponent = () => {

    return (
        <Router>
            <Route path={"/admin"}>
                <Admin />
                <Route key={1} path={`/admin/machine`} component={() => <MachinePage />} />
                <Route key={2} path={`/admin/user`} exact component={() => <UserPage />} />
            </Route>
        </Router>
    );
}

export default App;
