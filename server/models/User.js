module.exports = function(app){
    var UserSchema = app.mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        firstname: {
            type: String,
            required: true
        },
        mail: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    });

    UserSchema.plugin(require('mongoose-timestamp'));

    var User = app.mongoose.model('User', UserSchema);
    return User;
};