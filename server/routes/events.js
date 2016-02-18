/**
 * Created by Sam on 10/12/2015.
 */
var router = require('express').Router();
var bodyparser = require('body-parser').json();

module.exports = function(app){

    router.post('/',
        bodyparser,
        app.middlewares.authenticated,
        app.actions.events.create
    );

    router.put('/:id',
        bodyparser,
        app.middlewares.isEventCreator,
        app.actions.events.update
    );

    router.delete('/:id',
        app.middlewares.isEventCreator,
        app.actions.events.remove
    );





    /*
     *
     * FONCTIONS DE RECHERCHE
     *
     */
    router.get('/',
        app.actions.events.list
    );

    //Recherche par id
    router.get('/:id',
        app.actions.events.show
    );

    //Recherche par UserID (Organizer or Participant)
    router.get('/user/:id',
        app.actions.events.getByUser
    );

    //Recherche par Organisateur
    router.get('/organizer/:id',
        app.actions.events.getByOrganizer
    );
    
    //Recherche par Participant
    router.get('/participant/:id',
        app.actions.events.getByParticipant
    );

    //Recherche par query
    router.post('/find/',
        bodyparser,
        app.actions.events.find
    );








    /*
     *
     * PARTICIPANTS
     *
     */
    router.put('/subscribe/:id',
        bodyparser,
        app.actions.events.participants.subscribe
    );

    router.put('/unsubscribe/:id',
        bodyparser,
        app.middlewares.creatorCantUnsubscribe,
        app.actions.events.participants.unsubscribe
    );






    /*
     *
     * PICTURES
     *
     */
    router.post('/picture/:id',
        //app.middlewares.authenticated,
        app.middlewares.uploadPicture.single('picture'),
        app.actions.events.uploadPicture
    );

    router.post('/picture/',
        bodyparser,
        app.actions.events.deletePicture
        //app.middlewares.authenticated,
        //app.middlewares.uploadPicture.single('picture'),
    );

    return router;
};