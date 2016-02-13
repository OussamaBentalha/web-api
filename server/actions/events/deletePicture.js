/**
 * Created by Sam on 13/02/2016.
 */
var glob = require("glob");
var fs = require("fs");

module.exports = function (app) {
    return function (req, res, next) {

        console.log("URL : " + req.body.picturesUrl);

        app.models.Event.update(
            {picturesUrl: {$in: [req.body.picturesUrl]}},
            {$pull: {picturesUrl: req.body.picturesUrl}}, function (err, events) {
                if (err)
                    return res.status(500).send(err);


                var filename = "**/" + req.body.picturesUrl;
                console.log("filename : " + filename);

                glob(filename, function (err, files) {
                    if (err) throw err;

                    files.forEach(function (item, index, array) {
                        console.log(item + " found");
                    });

                    // Delete files
                    files.forEach(function (item, index, array) {
                        fs.unlink(item, function (err) {
                            if (err) throw err;

                            console.log(item + " deleted");
                            res.send(item + " deleted");
                        });
                    });

                });
            });

        /*app.models.Event.find({"picturesUrl": req.body.picturesUrl }, function(err, instance){
         if (err)
         return res.status(500).send(instance);

         console.log("Touver : " + instance);

         var filename = "**///"+req.body.picturesUrl; //Decommenter ici

        /*glob(filename,function(err,files){
         if (err) throw err;

         files.forEach(function(item,index,array){
         console.log(item + " found");
         });

         // Delete files
         files.forEach(function(item,index,array){
         fs.unlink(item, function(err){
         if (err) throw err;

         console.log(item + " deleted");
         });
         });
         });
         });*/
    }
};