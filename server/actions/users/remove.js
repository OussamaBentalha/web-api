/**
 * Created by Sam on 08/02/2016 on Cloud9.
 */
module.exports = function(app) {
    return function(req, res, next){
        app.models.User.findOneAndRemove({
            _id: req.params.id
        }, function(err, result){
            if(err)
                return res.status(500).send(err);
            
            res.send(result);
        });
    }
};