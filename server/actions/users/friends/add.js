/**
 * Created by Sam on 13/02/2016.
 */
module.exports = function(app){
    return function(req, res, next){
        var inputs = req.body;

        app.models.User.update(
            {_id: req.params.id},
            { $addToSet:inputs},
            function(err, instance){

                if(err)
                    return res.status(500).send(err);

                res.send(instance);
            })
    }
};