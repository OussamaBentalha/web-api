/**
 * Created by Sam on 17/02/2016.
 */
module.exports = function(app) {
    app.middlewares = app.middlewares || {};
    app.middlewares.isFreeCategory = function(req, res, next){

        app.models.Event.findOne({
            categoryId: req.params.id
        }, function(err, instance){
            if (err)
                return res.status(500).send(err);

            if(instance)
                return res.status(401).send('Event with this category exists');

            next();
        });
    }
};