const cheerio = require('cheerio');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World! from leetcode');
});

router.get('/:username', async (req, res) => {
    let $;
    let userinfo = await fetch('https://www.codechef.com/users/'+req.params.username,{
        redirect: 'manual'
    }) 
        .then((response) => response.text())
        .then((data)=>{$ = cheerio.load(data)});
        

        let script = $('main script').last().text();
        let all_rating = script.match(/var all_rating = (.*);/);
        if(all_rating === null){
            all_rating = [{},{}]
            all_rating[1] = JSON.stringify(all_rating[1]);
        }
        

        let userdata = {
            username: $('.m-username--link').text(),
            rating: $('.rating').first().text(),
            rating_number: parseInt($('.rating-number').text()),
            country: $('.user-country-name').text(),
            user_type: '',
            institution: '',
            organiasation: '',
            global_rank: $('.rating-ranks ul li').first().find('strong').text(),
            country_rank: $('.rating-ranks ul li').last().find('strong').text(),
            max_rank: parseInt($('.rating-header small').text().match(/\d+/)),
            all_rating: JSON.parse(all_rating[1]),
        }
        $('.user-details li').each((i,item)=>{
            if($(item).find('label').text() == 'Student/Professional:'){
                userdata.user_type = $(item).find('span').text();
            }else if($(item).find('label').text() == 'Institution:'){
                userdata.institution = $(item).find('span').text();
            }else if($(item).find('label').text() == 'Organisation:'){
                userdata.organiasation = $(item).find('span').text();
            }
        });

        if(userdata.username == ''){
            res.json({error: 'User not found'});
        }else{
            res.json(userdata);
        }
    

    
});

module.exports = router;
