/**
 * Created by Sam on 13/02/2016.
 */
var multer = require('multer');
var path = require('path');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../storage/pictures'));
    },
    filename: function (req, file, cb) {
        var components = file.originalname.split('.');

        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for( var i=0; i < 5; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        req.picturesUrl = 'event_' + text + '.' + components[components.length - 1];
        cb(null, req.picturesUrl);
    }
});

module.exports = function(app){
    app.middlewares = app.middlewares || {};
    app.middlewares.uploadPicture = multer({ storage: storage });
};