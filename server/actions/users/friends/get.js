/**
 * Created by Sam on 22/02/2016.
 */
module.exports = function(app){
    return function(req, res, next){
        console.log("Friends action : get");
        console.log("User id : " + req.params.id);
        app.models.User.findById(req.params.id, function(err, instance){
            if (err)
                return res.status(500).send(instance);

            /*if(instance){
                console.log("User friends : " + instance.friendsId);
                var friends = [];
                var size = instance.friendsId.length;
                var friendsId = instance.friendsId;
                console.log("FriendS ID : " + friendsId + " Size : " + size);
                for(var i = 0; i < size; i++){
                    var friendId = friendsId[i];
                    console.log("Itération : Friend id : " + friendId);
                    app.models.User.findById(friendId, function(err, friend){
                        if (err)
                            return res.status(500).send(err);

                        console.log("PUSH : " + friend + " i : "+i);
                        if(friend){
                            friends.push({friend: friend});

                            if(friend.id == friendsId[size-1]){
                                console.log("FriendS : " + friends);
                                res.send(friends);
                            }
                        }

                    });
                }
            }*/
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