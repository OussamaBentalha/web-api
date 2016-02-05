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
        app.actions.events.create
    );

    router.get('/',
        app.actions.events.list
    );

    //Recherche par id
    router.get('/:id',
        app.actions.events.show
    );

    //Recherche par query
    router.post('/find/',
        bodyparser,
        app.actions.events.find
    );

    router.put('/:id',
        bodyparser,
        app.actions.events.update
    );

    router.delete('/:id',
        app.actions.events.remove
    );

    //TODO Participants
    router.put('/subscribe/:id',
        bodyparser,
        app.actions.events.participants.subscribe
    );

    router.put('/unsubscribe/:id',
        bodyparser,
        app.actions.events.participants.unsubscribe
    );

    return router;
};