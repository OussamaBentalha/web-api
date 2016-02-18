/**
 * Created by Sam on 14/01/2016.
 * Précise si l'utilisateur est le créateur de l'evenement
 */
module.exports = function(app) {
    app.middlewares = app.middlewares || {};
    app.middlewares.isEventCreator = function(req, res, next){

        var userId = req.session.userId;

        app.models.Event.findOne({
            _id: req.params.id
        }, function(err, instance){
            if (err)
                return res.status(500).send(err);

            if(!instance)
                return res.status(401).send('this event is not created');

            if(userId != instance.organizerId)
                return res.status(403).send('you must be the creator of the event');

            next();
        });
    }
};