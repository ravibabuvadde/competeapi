const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World! from leetcode');
});

router.get('/:username', async (req, res) => {
    let userdata = []
    let userinfo = await fetch('https://codeforces.com/api/user.info?handles='+req.params.username)
        .then((response) => response.json())
        .then((data)=> { (data.status == 'OK') ? userdata.push(data.result[0]) : userdata.push({ error: 'User not found' }) });
    let userratings = await fetch('https://codeforces.com/api/user.rating?handle='+req.params.username) 
        .then((response) => response.json())
        .then((data)=> (data.status == 'OK') ? userdata.push({ratings:data.result}):"");
    res.json(userdata);
});

module.exports = router;