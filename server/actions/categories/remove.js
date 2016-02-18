/**
 * Created by Sam on 10/12/2015.
 */
module.exports = function(app) {
    return function(req, res, next){
        app.models.Category.findOneAndRemove({
            _id: req.params.id
        }, function(err, result){
            if(err)
                return res.status(500).send(err);

            res.send(result);
        });
    }
};