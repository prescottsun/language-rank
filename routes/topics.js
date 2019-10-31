const express = require('express'),
    router = express.Router(),
    TopicModel = require('../models/topicsModel');

router.get('/', async function(req, res, next) {
    const topicData = await TopicModel.getTopics();
    const rankData = await TopicModel.getRanks();
    res.render('template', {
        locals: {
            title: 'Language Ranking page',
            topicData: topicData,
            rankData: rankData
        },
        partials: {
            partial: 'partial-topics'
        }
    });
});

router.post('/update', (req, res) => {
    console.log('req body is', req.body);

    for(let key in req.body) {
        TopicModel.update(key, req.body[key]);
        console.log('key and req.body[key]', key, req.body[key]);
    }
    res.status(200).redirect('/')
    
})

module.exports = router;