module.exports = function(app){
    return function(req, res, next){

        app.models.User.findOne({ mail: req.body.mail }, function(err, user) {
            if (err) throw err;

            if(user) { // User trouvé
                user.comparePassword(req.body.password, function(err, isMatch) {
                    if (err) throw err;
                    if(isMatch) {
                        req.session.userId = user.id;
                        res.send(user);
                    } else {
                        // Mauvais password
                        return res.status(404).send('password incorrect');
                    }
                });
            } else { // User inexistant
                return res.status(404).send('account not found.');
            }


        });
    };
};