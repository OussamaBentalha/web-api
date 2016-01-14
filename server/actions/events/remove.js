/**
 * Created by Sam on 14/01/2016.
 */
module.exports = function(app) {
    return function(req, res, next){
        app.models.Event.findOneAndRemove({
            name: req.params.name
        }, function(err, result){
            if(err)
                return res.status(500).send(err);

            res.send(result);
        });
    }
};