/**
 * Created by Sam on 10/12/2015.
 */
var router = require('express').Router();
var bodyparser = require('body-parser').json();

module.exports = function(app){
    //TODO Test
    router.post('/',
        bodyparser,
        app.middlewares.authenticated,
        app.actions.events.create,
    );

    router.get('/',
        app.actions.events.list
    );

    router.get('/:id',
        app.actions.events.show
    );

    //TODO Tests + Middlewares

    router.put('/:id',
        app.actions.events.update
    );

    router.delete('/:name',
        app.actions.events.remove
    );

    //TODO Participants
    router.post('/suscribe/:id',
        app.actions.events.participants.suscribe
    );

    router.delete('/unsuscribe/:id',
        app.actions.events.participants.unsuscribe
    );

    return router;
};