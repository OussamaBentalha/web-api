/**
 * Created by Sam on 10/12/2015.
 */
module.exports = function(app){
    return {
        create: require('./create')(app),
        list: require('./list')(app),
        show: require('./show')(app),
        remove: require('./remove')(app)
        //TODO
        /*
        update: require('./update')(app),
        suscribe: require('./suscribe')(app),
        unsubscribe: require('./unsubscribe')(app)
         */
    };
};