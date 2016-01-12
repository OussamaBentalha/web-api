/**
 * Created by Sam on 10/12/2015.
 */
module.exports = function(app){
    return function(req, res, next){
        app.models.Event.find(function(err, events){
            if(err)
                return res.status(500).send(err);

            res.send(events);
        });
    }
};