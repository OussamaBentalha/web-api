/**
 * Created by Sam on 04/02/2016.
 */
module.exports = function(app){
    return function(req, res, next){
        var inputs = req.body;

        app.models.Event.find(inputs, function(err, events){
            if(err)
                return res.status(500).send(err);

            res.send(events);
        });
    }
};