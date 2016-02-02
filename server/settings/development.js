module.exports = {
    port: 8080,
    //LOCALHOST
    //db: 'mongodb://localhost:27017/todo-list-api',
    //sessionDb: 'mongodb://localhost:27017/todo-list-session-db',

    db: 'mongodb://inovea:inovea4iam@ds055485.mongolab.com:55485/inovea_eventdb',
    sessionDb:'mongodb://inovea:inovea4iam@ds055485.mongolab.com:55485/inovea_eventdb',
    sessionTTL: 2 * 24 * 60 * 60
};