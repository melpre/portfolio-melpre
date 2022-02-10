/* 'Project' Module */
  // Set up 'project/:id' route and render corresponding Pug file
  const express = require('express');
  const router = express.Router();

  const { projects } = require('../data.json');

  /* GET Project Page */
  router.get('/:id', (req, res) => {
    const project = projects[req.params.id];
    
    // Pass in {project} from locals
    res.render('project', { project } );
  });

  // Export module
  module.exports = router;