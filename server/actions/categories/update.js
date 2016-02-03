/**
 * Created by Sam on 16/01/2016.
 */
module.exports = function(app){
    /*return function(req, res, next){
        var inputs = req.body;

        app.models.Category.update({
            _id: req.params.id
        }, inputs, function(err, instance){

            if(err)
                return res.status(500).send(err);

            res.send(instance);
        })
    }*/
    return function(req, res, next){
        var inputs = req.body;

        app.models.Category.update({
            _id: req.params.id
        }, inputs).then(function() {
            res.send({
                success: true,
                data: null,
                message: "La category a été mis à jour avec succès."
            })
        })
    }
};