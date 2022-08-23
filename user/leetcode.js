const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res) => {
    res.send('Hello World! from leetcode');
});

router.get('/:username', (req, res) => {
  axios.post('https://leetcode.com/graphql',{
    headers: {
        'Content-Type': 'application/json',
    },
    query: `{
        matchedUser(username: ` + '"' + req.params.username + '"' + `) {
            username
          profile{
            userAvatar
          }
          languageProblemCount{
            languageName
            problemsSolved
          }
          submitStats: submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
          badges{
            name
          }
          userCalendar{
            streak
            totalActiveDays
          }
          
        }
        userContestRanking(username: ` + '"' + req.params.username + '"' + `) {
          attendedContestsCount
          globalRanking
          rating
          topPercentage
          totalParticipants
        }
        
      }`
})
    .then((response) => {
        res.send(response.data);
    })
    .catch((error) => {
        res.send(error);
    });
    
});

module.exports = router;
