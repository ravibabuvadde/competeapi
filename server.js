const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.use('/user', require('./user/index'));
app.use('/contests', require('./contests/index'));

app.listen(80,() => {
    console.log('Example app listening...!');
});

// Export the Express API
module.exports = app;
