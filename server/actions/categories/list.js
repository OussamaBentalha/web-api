/**
 * Created by Sam on 10/12/2015.
 */
module.exports = function(app){
    return function(req, res, next){
        app.models.Category.find(function(err, categories){
            if(err)
                return res.status(500).send(err);

            res.send(categories);
        });
    }
};