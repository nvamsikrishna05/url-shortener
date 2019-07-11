'use strict';

const router = require('express').Router();

const Url = require('../models/Url');

// @route GET /:code
// description Redirect to Original Url
router.get('/:code', async (req, res) => {
    try{
        const url = await Url.findOne({urlCode: req.params.code});

        if(url){
            return res.redirect(url.longUrl);
        }else{
            return res.status(404).json('NO Url Found');
        }
    }catch(e){
        console.log('Error occured while redirecting to original Url');
        res.status(500).json('Server Error');
    }
});

module.exports = router;