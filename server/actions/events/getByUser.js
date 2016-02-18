/**
 * Created by Sam on 09/02/2016.
 */
module.exports = function(app) {
    return function(req, res){
        app.models.Event.find({$or :[{"participantsId":
                                        { $in : [req.params.id] }},
                                    {"organizerId": req.params.id}]},
            function(err, events){
                if (err)
                    return res.status(500).send(events);

            res.send(events);
        })
    }
};