import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ManageUsers from "./components/ManageUsers";
import UserForm from "./components/UserForm";
import AddUser from "./components/AddUser";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/users" component={ManageUsers} />
                <Route path="/add-user" component={AddUser} />
                <Route path="/edit-user/:id" component={UserForm} />
            </Switch>
        </Router>
    );
}

export default App