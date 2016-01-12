/**
 * Created by Sam on 10/12/2015.
 */
module.exports = function(app){
    return {
        create: require('./create')(app),
        list: require('./list')(app),
        remove: require('./remove')(app),
        show: require('./show')(app)
    };
};