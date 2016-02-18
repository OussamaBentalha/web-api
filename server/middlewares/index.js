var cookieParser = require('cookie-parser');

module.exports = function(app) {
    app.use(cookieParser());

    require('./session')(app);
    require('./authenticated')(app);
    require('./uploadAvatar')(app);
    require('./uploadPicture')(app);
    require('./isEventCreator')(app);
    require('./userExist')(app);
    require('./isFreeCategory')(app);
    require('./creatorCantUnsubscribe')(app);
};