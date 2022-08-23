const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res) => {
    res.send('Hello World! from leetcode');
});

router.get('/:username', async (req, res) => {
    let userdata = []
    let userinfo = await axios.get('https://codeforces.com/api/user.info?handles='+req.params.username)
        .then((response)=> { (response.data.status == 'OK') ? userdata.push(response.data.result[0]) : userdata.push({ error: 'User not found' }) })
        .catch((error) => {
            userdata.push({ error: 'User not found' })
        });
        let userratings = await axios.get('https://codeforces.com/api/user.rating?handle='+req.params.username)
        .then((response)=> (response.data.status == 'OK') ? userdata.push({ratings:response.data.result}):"")
        .catch((error) => {
        });
    res.json(userdata);
});

module.exports = router;
