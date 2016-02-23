/**
 * Created by Sam on 22/02/2016.
 */
module.exports = function(app){
    return function(req, res, next){

        app.models.User.findById(req.params.id, function(err, instance){
            if (err)
                return res.status(500).send(instance);

            if(instance){
                app.models.User.find({_id: { $in: instance.friendsId }}, function(err, users){
                    if(err)
                        return res.status(500).send(err);

                    res.send(users);
                });
            }

        });

    }
};