/**
 * Created by Sam on 09/02/2016 on Cloud9.
 */
module.exports = function(app) {
    return function(req, res){
        app.models.Event.find({"organizerId": req.params.id}, function(err, instance){
            if (err)
                return res.status(500).send(instance);

            res.send(instance);
        })
    }
};
