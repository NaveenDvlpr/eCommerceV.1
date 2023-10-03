const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = 3500 || process.env.PORT;

app.get('/', (req, res) => {
    res.send("Hello Node Js");
})

mongoose.connect(process.env.DATABASE_URI)
.then(() => {
    console.log("Connected to MongoDB");
    app.listen(3500, () => {
        console.log(`Listening to port ${PORT}`);
    })
})
.catch((err) => {
    console.log(`Error Message: ${err.message}`);
})
