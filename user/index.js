const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World! from user');
});

router.use('/leetcode', require('./leetcode'));
router.use('/codeforces', require('./codeforces'));
router.use('/codechef', require('./codechef'));

module.exports = router;
