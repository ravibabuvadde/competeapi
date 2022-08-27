const express = require('express');
const router = express.Router();
const axios = require('axios');


router.get('/', (req, res) => {
    axios.post('https://codeforces.com/api/contest.list',{
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then((response) => {
        res.send(response.data);
    })
    .catch((error) => {
        res.send(error);
    });
    
});

module.exports = router;