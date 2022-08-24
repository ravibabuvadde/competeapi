const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World! from contests');
});

router.use('/codechef', require('./codechef'));

module.exports = router;