/* 'About' Module */
    // Set up 'About' route and render corresponding Pug file
    const express = require('express');
    const router = express.Router();

    router.get('/about', (req, res) => {
        res.render('about');
    });

    // Export module
    module.exports = router;