/**
 * Created by Sam on 09/02/2016 on Cloud9.
 */
module.exports = function(app){
    return function(req, res, next){
        var inputs = req.body;

        app.models.User.update({
            _id: req.params.id
        }, inputs, function(err, instance){

            if(err)
                return res.status(500).send(err);

            res.send(instance);
        })
    }
};