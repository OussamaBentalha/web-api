/**
 * Created by Sam on 10/12/2015.
 */
var router = require('express').Router();
var bodyparser = require('body-parser').json();

module.exports = function(app){
    router.post('/',
        bodyparser,
        app.middlewares.authenticated,
        app.actions.categories.create
    );

    router.get('/',
        app.actions.categories.list
    );

    //TODO Tests
    router.delete('/:name',
        app.actions.categories.remove
    );

    return router;
};