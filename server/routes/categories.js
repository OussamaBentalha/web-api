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

    router.get('/:id',
        app.actions.categories.show
    );

    //TODO Tests + Middlewares
    router.put('/:id',
        app.actions.categories.update
    );

    router.delete('/:name',
        app.actions.categories.remove
    );

    return router;
};