const express = require('express');
const router = express.Router();
const useragent = require('useragent');

const { Url } = require('../models/url');


//redirect to original url
router.get('/:hash', (req, res) => {

    let hash = req.params.hash;
    let agent = useragent.parse(req.headers['user-agent']);
    let arrayElement = {      //construct an object to push it in 'clicks' array 
        ipAddress: req.ip,
        browserName: agent.family,
        osType: agent.os,
        deviceType: agent.device
    };

    
    Url.findOne({ hashedUrl: hash }).then((url) => {
        if (!url) {
            res.send({
                notice: 'url not found'
            });
        }
        Url.findOneAndUpdate({ hashedUrl: hash }, { $push: { clicks: arrayElement}} ).then((response) => {  
            res.redirect(
                url.originalURL
            );
        });
    });
});


module.exports = {
    hashedUrlController: router
}