const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.use('/user', require('./user/index'));

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});

// Export the Express API
module.exports = app;
