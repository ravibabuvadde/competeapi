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
        let data = response.data.result;
        let contests = [];
        for(let i=0;i<data.length;i++){
            if(data[i].phase !== "BEFORE") continue;
            let contest = {};
            contest.site = 'codeforces';
            contest.title = data[i].name;
            contest.startTime = data[i].startTimeSeconds*1000;
            contest.duration = data[i].durationSeconds*1000;
            contest.endTime = contest.startTime + contest.duration;
            contest.url = "https://codeforces.com/contests/"+data[i].id;
            contests.push(contest);
        }
        // sort contest by start time
        contests.sort((a,b) => {
            return a.startTime - b.startTime;
        });
        res.send(contests);
    })
    .catch((error) => {
        res.send(error);
    });
    
});

module.exports = router;