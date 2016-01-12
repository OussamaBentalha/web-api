/**
 * Created by Sam on 10/12/2015.
 */
module.exports = function(app) {
    return function(req, res){
        app.models.Event.findById(req.params.id, function(err, instance){
            if (err)
                return res.status(500).send(instance);

            res.send(instance);
        })
    }
};
