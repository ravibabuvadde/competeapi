const express = require('express');
const router = express.Router();
const axios = require('axios');


router.get('/', (req, res) => {
    axios.post('https://leetcode.com/graphql',{
      headers: {
          'Content-Type': 'application/json',
      },
      query: `{
        topTwoContests{
          title
          startTime
          duration
          cardImg
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