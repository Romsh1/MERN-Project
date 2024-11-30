const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String, // Store hashed passwords in production
    dateOfBirth: String,
    address1: String,
    address2: String,
    city: String,
    postalCode: String,
    country: String,
    phoneNumber: String,
    notes: String,
});

module.exports = mongoose.model("User", userSchema);



// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//     firstName: { type: String, required: true },
//     lastName: { type: String, required: true },
//     dateOfBirth: { type: Date, required: true },
//     address1: { type: String, required: true },
//     address2: { type: String },
//     city: { type: String, required: true },
//     postalCode: { type: String, required: true },
//     country: { type: String, required: true },
//     phoneNumber: { type: String, required: true },
//     email: { type: String, required: true },
//     notes: { type: String },
// });

// module.exports = mongoose.model("User", userSchema);
