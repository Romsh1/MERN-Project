const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

//creating a get route and parsing incoming request with json
app.get('/message', (req, res) => {
    res.json({ message: "Hello World!"});
});

//to start the server
app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
});