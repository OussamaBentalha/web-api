/**
 * Created by Sam on 10/12/2015.
 */
var fs = require("fs");


module.exports = function (app) {
    return function(req, res, next){

        // Asynchronous read
        fs.readFile('input.txt', function (err, data) {
            if (err) {
                return console.error(err);
            }
            console.log("Asynchronous read: " + data.toString());
        });

    }
};