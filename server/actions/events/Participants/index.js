/**
 * Created by Sam on 16/01/2016.
 */
module.exports = function(app){
    return {
        suscribe: require('./suscribe')(app),
        unsuscribe: require('./unsuscribe')(app)
    };
};