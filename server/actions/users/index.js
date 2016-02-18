module.exports = function(app){
    return {
        create: require('./create')(app),
        list: require('./list')(app),
        show: require('./show')(app),
        update: require('./update')(app),
        remove: require('./remove')(app),
        uploadAvatar: require('./uploadAvatar')(app),
        friends: require('./friends')(app)
    };
};