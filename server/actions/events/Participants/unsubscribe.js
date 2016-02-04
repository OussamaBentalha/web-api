/**
 * Created by Sam on 16/01/2016.
 */
module.exports = function(app){
    return function(req, res, next){
        var inputs = req.body;

        app.models.Event.update(
            {_id: req.params.id},
            { $pull:inputs},
            function(err, instance){

                if(err)
                    return res.status(500).send(err);

                res.send(instance);
            })
    }
};