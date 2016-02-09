/**
 * Created by Sam on 109/02/2016 on Cloud9.
 */
module.exports = function(app) {
    return function(req, res){
        app.models.User.findById(req.params.id, function(err, instance){
            if (err)
                return res.status(500).send(instance);

            res.send(instance);
        })
    }
};