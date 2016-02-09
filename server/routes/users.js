var router = require('express').Router();
var bodyparser = require('body-parser').json();

module.exports = function(app){
    router.post('/',
        bodyparser,
        app.middlewares.userExist,
        app.actions.users.create
    );

    router.get('/',
        app.actions.users.list
    );
    
    //Recherche par id
    router.get('/:id',
        app.actions.users.show
    );
    
    router.put('/:id',
        bodyparser,
        app.actions.users.update
    );
    
    router.delete('/:id',
        app.actions.users.remove
    );

    router.post('/avatar',
        app.middlewares.authenticated,
        app.middlewares.upload.single('avatar'),
        app.actions.users.uploadAvatar
    );

    return router;
};
