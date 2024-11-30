import React, { useState } from "react";
import { addUser } from "../api";
import { TextInput, Button, Pane, Heading } from "evergreen-ui";

const AddUserPage = () => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        address1: "",
        address2: "",
        city: "",
        postalCode: "",
        country: "",
        phoneNumber: "",
        email: "",
        notes: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addUser(user);
            alert("User added successfully!");
            setUser({
                firstName: "",
                lastName: "",
                dateOfBirth: "",
                address1: "",
                address2: "",
                city: "",
                postalCode: "",
                country: "",
                phoneNumber: "",
                email: "",
                notes: "",
            });
        } catch (error) {
            console.error(error);
            alert("Error adding user");
        }
    };

    return (
        <Pane display="flex" flexDirection="column" alignItems="center" padding={20}>
            <Heading size={600} marginBottom={20}>
                Add User
            </Heading>
            <form onSubmit={handleSubmit}>
                {Object.keys(user).map((key) => (
                    <TextInput
                        key={key}
                        name={key}
                        placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                        value={user[key]}
                        onChange={handleChange}
                        marginBottom={10}
                        width="100%"
                    />
                ))}
                <Button type="submit" appearance="primary">
                    Add User
                </Button>
            </form>
        </Pane>
    );
};

export default AddUserPage;
