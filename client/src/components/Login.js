import React, { useState } from "react";
import axios from "axios";
import { Pane, TextInput, Button, Heading } from "evergreen-ui";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log("Sending credentials:", credentials);
        try {
            const response = await axios.post("http://localhost:5000/api/login", credentials);
            alert(response.data.message);
            navigate("/add"); // Redirect to the Add User page upon successful login
        } catch (err) {
            setError("Invalid username or password");
        }
    };

    return (
        <Pane display="flex" flexDirection="column" alignItems="center" padding={20}>
            <Heading size={600} marginBottom={20}>
                Login
            </Heading>
            <form onSubmit={handleLogin}>
                <TextInput
                    name="username"
                    placeholder="Username"
                    value={credentials.username}
                    onChange={handleChange}
                    marginBottom={10}
                    width="100%"
                />
                <TextInput
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={credentials.password}
                    onChange={handleChange}
                    marginBottom={10}
                    width="100%"
                />
                <Button type="submit" appearance="primary">
                    Login
                </Button>
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </Pane>
    );
};

export default LoginPage;



// import React, { useState } from "react";
// import { Button, TextInput, Pane } from "evergreen-ui";

// const LoginPage = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const handleLogin = () => {
//         if (email === "admin@example.com" && password === "password") {
//             window.location.href = "/add";
//         } else {
//             alert("Invalid credentials");
//         }
//     };

//     return (
//         <Pane display="flex" flexDirection="column" alignItems="center" padding={20}>
//             <TextInput
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 marginBottom={10}
//             />
//             <TextInput
//                 placeholder="Password"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 marginBottom={10}
//             />
//             <Button onClick={handleLogin}>Login</Button>
//         </Pane>
//     );
// };

// export default LoginPage;
