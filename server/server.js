// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");

// const connectDB = require("./config/db");
// const userRoutes = require("./routes/users");
// const authRoutes = require("./routes/auth");

// const app = express();

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Connect to MongoDB
// connectDB();

// // Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);

// const PORT = 5000;
// app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));


const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

const userRoutes = require("./routes/userRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/users", userRoutes);

// MongoDB Connection
mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error(err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
