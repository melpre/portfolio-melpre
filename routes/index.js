/* '/' Module */
    // Set up '/' route and render corresponding Pug file
    const express = require('express');
    const router = express.Router();

    const { projects } = require('../data.json');

    /* GET Home Page */
    // Pass in JSON data in {projects}
    router.get('/', (req, res) => {
        res.render('index', { projects });
    });

    // Export module
    module.exports = router;