import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "../api";

function AddUser() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        dateOfBirth: "",
        address1: "",
        address2: "",
        city: "",
        postalCode: "",
        country: "",
        phoneNumber: "",
        notes: "",
    });
    const history = useHistory();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/users", formData);
            alert("User added successfully");
            history.push("/users");
        } catch (error) {
            console.error(error);
            alert("Error adding user");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add User</h2>
            {Object.keys(formData).map((key) => (
                <input
                    key={key}
                    name={key}
                    placeholder={key}
                    value={formData[key]}
                    onChange={handleChange}
                />
            ))}
            <button type="submit">Submit</button>
        </form>
    );
}

export default AddUser;


// import React, { useState } from "react";
// import { addUser } from "../api";
// import { TextInput, Button, Pane, Heading } from "evergreen-ui";

// const AddUserPage = () => {
//     const [user, setUser] = useState({
//         firstName: "",
//         lastName: "",
//         dateOfBirth: "",
//         address1: "",
//         address2: "",
//         city: "",
//         postalCode: "",
//         country: "",
//         phoneNumber: "",
//         email: "",
//         notes: "",
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setUser({ ...user, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await addUser(user);
//             alert("User added successfully!");
//             setUser({
//                 firstName: "",
//                 lastName: "",
//                 dateOfBirth: "",
//                 address1: "",
//                 address2: "",
//                 city: "",
//                 postalCode: "",
//                 country: "",
//                 phoneNumber: "",
//                 email: "",
//                 notes: "",
//             });
//         } catch (error) {
//             console.error(error);
//             alert("Error adding user");
//         }
//     };

//     return (
//         <Pane display="flex" flexDirection="column" alignItems="center" padding={20}>
//             <Heading size={600} marginBottom={20}>
//                 Add User
//             </Heading>
//             <form onSubmit={handleSubmit}>
//                 {Object.keys(user).map((key) => (
//                     <TextInput
//                         key={key}
//                         name={key}
//                         placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
//                         value={user[key]}
//                         onChange={handleChange}
//                         marginBottom={10}
//                         width="100%"
//                     />
//                 ))}
//                 <Button type="submit" appearance="primary">
//                     Add User
//                 </Button>
//             </form>
//         </Pane>
//     );
// };

// export default AddUserPage;
