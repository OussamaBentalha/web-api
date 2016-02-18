/**
 * Created by Sam on 13/02/2016.
 */
module.exports = function(app){
    return {
        add: require('./add')(app),
        remove: require('./remove')(app)
    };
};