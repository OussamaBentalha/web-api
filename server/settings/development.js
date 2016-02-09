module.exports = {
    port: process.env.PORT || 8080,

    /***********
     * LOCALHOST
     ************/
    db: 'mongodb://localhost:27017/todo-list-api',
    sessionDb: 'mongodb://localhost:27017/todo-list-session-db',

    /***********
     * MONGOLAB
     ************/
    //db: 'mongodb://heroku_0bcx23jj:9m6811rb7vodv4pkrrapuo7aab@ds059185.mongolab.com:59185/heroku_0bcx23jj',
    //sessionDb: 'mongodb://heroku_z34shwgt:ed7ur8153k398p2bqs96hieor2@ds055895.mongolab.com:55895/heroku_z34shwgt',

    sessionTTL: 2 * 24 * 60 * 60
};
