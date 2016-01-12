/**
 * Created by Sam on 10/12/2015.
 */
module.exports = function(app){
    return function(req, res, next){
        var event = new app.models.Category({
            name: req.body.name,
            description: req.body.description,
            eventDate: req.body.eventDate,
            //TODO Image
            category: req.body.category,
            userId: req.session.userId
        });

        event.save(function(err, instance){
            if(err)
                return res.status(500).send(err);

            res.send(instance);
        });
    }
};