module.exports = function(app) {
    app.middlewares = app.middlewares || {};
    app.middlewares.userExist = function(req, res, next) {
        var email = req.body.email;

        app.models.User.findOne({
            email: email
        }, function(err, user) {
            if (err)
                return res.status(500).send(err);

            if (user)
                return res.status(401).send('email already used');

            next();
        });
    }
};