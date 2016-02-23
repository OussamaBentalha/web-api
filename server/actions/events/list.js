/**
 * Created by Sam on 10/12/2015.
 */
module.exports = function(app){
    return function(req, res, next){
        var skip = 0;

        if(req.query['skip'])
            skip = req.query['skip'];

        app.models.Event.find(function(err, events){
            if(err)
                return res.status(500).send(err);

            res.send(events);
        }).skip(skip).limit(10);
    }
};