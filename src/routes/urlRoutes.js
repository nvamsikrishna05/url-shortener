'use strict';

const router = require('express').Router();
const validUrl = require('valid-url');
const shortid = require('shortid');

const Url = require('../models/Url');

// @route POST /api/url/shorten
// @description create short url
router.post('/shorten', async (req, res) => {
    const {longUrl} = req.body;
    const baseUrl = process.env.BASE_URL;

    // Check base url
    if(!validUrl.isUri(baseUrl)){
        return res.status(401).send({
            error: 'Invalid Base Url'
        });
    }

    // Create url code
    const urlCode = shortid.generate();

    // Check long url is valid
    if(!validUrl.isUri(longUrl)){
        return res.status(401).send({
            message: 'Invalid long url'
        });
    }

    try{
        let url = await Url.findOne({longUrl});

        if(url){
            res.json(url);
        } else{
            const shortUrl = baseUrl + '/' + urlCode;
            url = new Url({
                longUrl,
                shortUrl,
                urlCode
            });

            await url.save();

            res.json(url);
        }
    }catch(e){
        console.log(`Error occured while generating shorturl`);
        return res.status(500).json('Server Error');
    }

});

module.exports = router;