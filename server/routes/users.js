// const express = require("express");
// const User = require("../models/User");
// const router = express.Router();

// // Get all users
// router.get("/", async (req, res) => {
//     try {
//         const users = await User.find();
//         res.status(200).json(users);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

// // Add a new user
// router.post("/", async (req, res) => {
//     const newUser = new User(req.body);
//     try {
//         const savedUser = await newUser.save();
//         res.status(201).json(savedUser);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

// // Update a user
// router.put("/:id", async (req, res) => {
//     try {
//         const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         res.status(200).json(updatedUser);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

// // Delete a user
// router.delete("/:id", async (req, res) => {
//     try {
//         await User.findByIdAndDelete(req.params.id);
//         res.status(200).json({ message: "User deleted successfully" });
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

// module.exports = router;




const express = require("express");
const User = require("../models/User");

const router = express.Router();

//To login
const users = [
    { username: "admin", password: "admin123" },
    { username: "user", password: "user123" },
];

router.post("/login", (req, res) => {
    const { username, password } = req.body;
    const user = users.find(
        (u) => u.username === username && u.password === password
    );
    if (user) {
        res.status(200).json({ message: "Login successful", user });
    } else {
        res.status(401).json({ message: "Invalid credentials" });
    }
});

// Add User
router.post("/add", async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get All Users
router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update User
router.put("/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Delete User
router.delete("/:id", async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "User deleted successfully." });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
