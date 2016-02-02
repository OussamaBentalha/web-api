/**
 * Created by Sam on 16/01/2016.
 */
module.exports = function(app){
    return {
        subscribe: require('./subscribe')(app),
        unsubscribe: require('./unsubscribe')(app),
        list: require('./list')(app)
    };
};