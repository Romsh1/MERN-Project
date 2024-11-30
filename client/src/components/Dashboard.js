import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>
            <Link to="/users">Manage Users</Link>
            <Link to="/add-user">Add User</Link>
        </div>
    );
}

export default Dashboard;
