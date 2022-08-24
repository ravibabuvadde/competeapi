const express = require('express');
const router = express.Router();
const axios = require('axios');


router.get('/', (req, res) => {
  axios.post('https://www.codechef.com/api/list/contests/all?sort_by=START&sorting_order=asc&offset=0&mode=all',{
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