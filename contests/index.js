const express = require('express');
const router = express.Router();
const axios = require('axios');
const cors = require('cors');


router.use(cors());

const parseCodechef = (data) => {
    let contests = [];
    for (let i = 0; i < data.length; i++) {
        let contest = {};
        contest.site = 'codechef';
        contest.title = data[i].contest_name;
        contest.startTime = data[i].contest_start_date;
        let date = new Date(contest.startTime);
        let milliseconds = date.getTime();
        contest.startTime = milliseconds;
        contest.duration = data[i].contest_duration*60*1000;
        contest.endTime = contest.startTime + contest.duration;
        contest.url = "https://www.codechef.com/"+data[i].contest_code;
        contests.push(contest);
    }
    return contests;
}

const parseCodeforces = (data) => {
    let contests = [];
    for (let i = 0; i < data.length; i++) {
        if(data[i].phase === 'FINISHED') break;
        let contest = {};
        contest.site = 'codeforces';
        contest.title = data[i].name;
        contest.startTime = data[i].startTimeSeconds*1000;
        contest.duration = data[i].durationSeconds*1000;
        contest.endTime = contest.startTime + contest.duration;
        contest.url = "https://codeforces.com/contest/"+data[i].id;
        contests.push(contest);
    }

    return contests;
}

const parseLeetcode = (data) => {
    let contests = [];
    for (let i = 0; i < data.length; i++) {
        let contest = {};
        contest.site = 'leetcode';
        contest.title = data[i].title;
        contest.startTime = data[i].startTime*1000;
        contest.duration = data[i].duration*60*1000;
        contest.endTime = contest.startTime + contest.duration;
        contest.url = "https://leetcode.com/contest/"+data[i].titleSlug;
        contests.push(contest);
    }
    return contests;
}

router.get('/', (req, res) => {
    res.send('Hello World');
});



router.get('/upcoming/', async (req, res) => {
    let contests = [];
    await axios.post('https://www.codechef.com/api/list/contests/all?sort_by=START&sorting_order=asc&offset=0&mode=all',{
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then((response) => {
        contests.push(response.data.future_contests);
    })
    .catch((error) => {
        res.send(error);
    });
    await axios.post('https://leetcode.com/graphql',{
        headers: {
            'Content-Type': 'application/json',
        },
        query: `{
          topTwoContests{
            title
            startTime
            duration
            cardImg
            titleSlug
          }
        }`
      })
      .then((response) => {
          contests.push(response.data.data.topTwoContests);
      })
      .catch((error) => {
          res.send(error);
      });
    await axios.post('https://codeforces.com/api/contest.list',{
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then((response) => {
        contests.push(response.data.result);
    })
    .catch((error) => {
        res.send(error);
    });
    let sorted = [].concat(parseLeetcode(contests[1]),parseCodeforces(contests[2]),parseCodechef(contests[0])).sort(function(a, b){
        return a.startTime - b.startTime;
    });
    res.send(sorted);
});

router.use('/codechef', require('./codechef'));
router.use('/codeforces', require('./codeforces'));
router.use('/leetcode', require('./leetcode'));

module.exports = router;