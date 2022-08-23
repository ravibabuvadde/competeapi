const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World! from leetcode');
});

router.get('/:username', (req, res) => {
    fetch('https://leetcode.com/graphql',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
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

    })
        .then((response) => response.json())
        .then((data) => res.send(data));
    
});

module.exports = router;
