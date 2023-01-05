const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');

app.use(cors());

app.use(express.static('public'));



app.use('/user', require('./user/index'));
app.use('/contests', require('./contests/index'));

app.listen(80,() => {
    console.log('Example app listening...!');
});

// Export the Express API
module.exports = app;
