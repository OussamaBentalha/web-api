/**
 * Created by Sam on 18/02/2016.
 */
module.exports = function(app) {
    app.middlewares = app.middlewares || {};
    app.middlewares.creatorCantUnsubscribe = function(req, res, next){
        var participantId = req.body.participantsId;
        var userId = req.session.userId;

        app.models.Event.findOne({
            _id: req.params.id
        }, function(err, instance){
            if (err)
                return res.status(500).send(err);

            if(!instance)
                return res.status(401).send('this event is not created');

            if(participantId = instance.organizerId)
                return res.status(403).send("you can't unsubscribe this event, you're the owner");

            next();
        });
    }
};