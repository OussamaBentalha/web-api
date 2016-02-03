/**
 * Created by Sam on 10/12/2015.
 */
module.exports = function(app){
    return function(req, res, next){
        var event = new app.models.Event({
            title: req.body.title,
            description: req.body.description,
            eventDate: req.body.eventDate,
            categoryId: req.body.categoryId,
            organizerId: req.session.userId,
            participantsId: req.session.userId
        });

        event.save(function(err, instance){
            if(err)
                return res.status(500).send(err);

            res.send(instance);
        });
    }
};
