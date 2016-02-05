module.exports = {
    port: 8080,
    //LOCALHOST
    db: 'mongodb://heroku_0bcx23jj:9m6811rb7vodv4pkrrapuo7aab@ds059185.mongolab.com:59185/heroku_0bcx23jj',
    sessionDb: 'mongodb://admin:admin@ds055895.mongolab.com:55895/heroku_z34shwgt',

    //db: 'mongodb://inovea_eventdb',
    //sessionDb:'mongodb://inovea:inovea4iam@ds055485.mongolab.com:55485/inovea_eventdb',
    sessionTTL: 2 * 24 * 60 * 60
};