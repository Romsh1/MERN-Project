import React, { useEffect, useState } from "react";
import axios from "../api";
import { useHistory } from "react-router-dom";

function ManageUsers() {
    const [users, setUsers] = useState([]);
    const history = useHistory();

    useEffect(() => {
        axios.get("/users").then((res) => setUsers(res.data));
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            await axios.delete(`/users/${id}`);
            setUsers(users.filter((user) => user._id !== id));
        }
    };

    const handleEdit = (id) => {
        history.push(`/edit-user/${id}`);
    };

    return (
        <div>
            <h2>Manage Users</h2>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._id}>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>
                                <button onClick={() => handleEdit(user._id)}>Edit</button>
                                <button onClick={() => handleDelete(user._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ManageUsers;


// import React, { useState, useEffect } from "react";
// import { getUsers, updateUser, deleteUser } from "../api";
// import { AgGridReact } from "ag-grid-react";
// import { Button, Pane } from "evergreen-ui";

// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-alpine.css";

// const UserTablePage = () => {
//     const [users, setUsers] = useState([]);
//     const [editingUser, setEditingUser] = useState(null);

//     useEffect(() => {
//         const fetchUsers = async () => {
//             const response = await getUsers();
//             setUsers(response.data);
//         };
//         fetchUsers();
//     }, []);

//     const handleUpdate = async () => {
//         if (editingUser) {
//             try {
//                 await updateUser(editingUser._id, editingUser);
//                 alert("User updated successfully!");
//                 setEditingUser(null);
//             } catch (error) {
//                 console.error(error);
//                 alert("Error updating user");
//             }
//         }
//     };

//     const handleDelete = async (id) => {
//         try {
//             await deleteUser(id);
//             alert("User deleted successfully!");
//             setUsers(users.filter((user) => user._id !== id));
//         } catch (error) {
//             console.error(error);
//             alert("Error deleting user");
//         }
//     };

//     const handleCellEdit = (params) => {
//         setEditingUser({ ...params.data, [params.colDef.field]: params.value });
//     };

//     const columnDefs = [
//         { field: "firstName", editable: true },
//         { field: "lastName", editable: true },
//         { field: "dateOfBirth", editable: true },
//         { field: "address1", editable: true },
//         { field: "address2", editable: true },
//         { field: "city", editable: true },
//         { field: "postalCode", editable: true },
//         { field: "country", editable: true },
//         { field: "phoneNumber", editable: true },
//         { field: "email", editable: true },
//         { field: "notes", editable: true },
//         {
//             headerName: "Actions",
//             cellRendererFramework: (params) => (
//                 <Button
//                     appearance="primary"
//                     intent="danger"
//                     onClick={() => handleDelete(params.data._id)}
//                 >
//                     Delete
//                 </Button>
//             ),
//         },
//     ];

//     return (
//         <Pane display="flex" flexDirection="column" alignItems="center" padding={20}>
//             <div
//                 className="ag-theme-alpine"
//                 style={{ height: 400, width: "100%", marginBottom: 20 }}
//             >
//                 <AgGridReact
//                     rowData={users}
//                     columnDefs={columnDefs}
//                     defaultColDef={{ flex: 1, minWidth: 150, resizable: true }}
//                     onCellValueChanged={handleCellEdit}
//                 />
//             </div>
//             {editingUser && (
//                 <Button appearance="primary" onClick={handleUpdate}>
//                     Save Changes
//                 </Button>
//             )}
//         </Pane>
//     );
// };

// export default UserTablePage;
