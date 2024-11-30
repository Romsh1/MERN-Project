import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import AddUser from "./pages/AddUser";
import UserTable from "./pages/UserTable";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/add" element={<AddUser />} />
                <Route path="/users" element={<UserTable />} />
            </Routes>
        </Router>
    );
};

export default App;
