/**
 * Created by Sam on 14/01/2016.
 */
module.exports = function(app) {
    return function(req, res, next){
        app.models.Event.findOneAndRemove({
            _id: req.params.id
        }, function(err, result){
            if(err)
                return res.status(500).send(err);
            
            res.send(result);
        });
    }
};