const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.use('/user', require('./user/index'));

app.listen(80,() => {
    console.log('Example app listening...!');
});

// Export the Express API
module.exports = app;
