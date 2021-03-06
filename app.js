/******************************************
Portfolio Website of Melissa Preece
Built with Node.js and Express

******************************************/

/* Required Dependencies */
// Require Express and its dependencies
const express = require('express');
const app = express();


/* Routes */
// Set up routes
const indexRoute = require('./routes');
const aboutRoute = require('./routes/about');
const projectsRoute = require('./routes/project');


/* Middleware */
    // Set up middleware
    app.use('/static', express.static('public'));
    app.set('view engine', 'pug');

    app.use(indexRoute);
    app.use(aboutRoute);
    app.use('/projects', projectsRoute);

    /* Error Handlers */
    // 404 error handler
    app.use((req, res, next) => {
        const err = new Error();
        err.status = 404;
        next(err);
    });

    // Global error handler
    app.use((err, req, res, next) => {
        if (err.status === 404) {
            console.log('404 error handler called', err);
            res.locals.error = err;
            err.message = 'Page not found!';
            res.status(err.status).render('page-not-found', { err } );
        } else {
            console.log('Global error handler called', err);
            res.locals.error = err;
            err.status = 500;
            err.message = 'Oops! Something went wrong with the server.';
            res.status(err.status).render('error', { err } );
        };
    }); 

    
/* Server */
// Start server

/* Original code */
// app.listen(3000, () => {
//     console.log('The application is running on localhost:3000.');
// });

/* Heroku recommended code */
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port, () => {
    console.log(`The application is running on localhost:${port}.`);
});





