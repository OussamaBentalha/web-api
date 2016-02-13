/**
 * Created by Sam on 10/12/2015.
 */
module.exports = function(app){
    return {
        create: require('./create')(app),
        list: require('./list')(app),
        show: require('./show')(app),
        remove: require('./remove')(app),
        update: require('./update')(app),
        find: require('./find')(app),
        participants: require('./Participants')(app),
        getByUser: require('./getByUser')(app),
        getByOrganizer: require('./getByOrganizer')(app),
        getByParticipant: require('./getByParticipant')(app),
        uploadPicture: require('./uploadPicture')(app),
    };
};