// import React, { useState, useEffect } from "react";
// import axios from "../api";

// function UserForm({ match, history }) {
//     const [formData, setFormData] = useState({
//         firstName: "",
//         lastName: "",
//         email: "",
//         dateOfBirth: "",
//         address1: "",
//         address2: "",
//         city: "",
//         postalCode: "",
//         country: "",
//         phoneNumber: "",
//         notes: "",
//     });

//     const userId = match.params.id;

//     useEffect(() => {
//         if (userId) {
//             axios.get(`/users/${userId}`).then((res) => setFormData(res.data));
//         }
//     }, [userId]);

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             if (userId) {
//                 await axios.put(`/users/${userId}`, formData);
//                 alert("User updated successfully");
//             } else {
//                 await axios.post("/users", formData);
//                 alert("User added successfully");
//             }
//             history.push("/users");
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <h2>{userId ? "Edit User" : "Add User"}</h2>
//             {Object.keys(formData).map((key) => (
//                 <input
//                     key={key}
//                     name={key}
//                     placeholder={key}
//                     value={formData[key]}
//                     onChange={handleChange}
//                 />
//             ))}
//             <button type="submit">Submit</button>
//         </form>
//     );
// }

// export default UserForm;
