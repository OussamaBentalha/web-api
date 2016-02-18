global._ = require('lodash');
global.Promise = require('bluebird');
global.PromisifyAll = function(obj){ Promise.promisifyAll(obj, {suffix: "P"}); return obj};
global.bcrypt = require('bcrypt');
global.SALT_WORK_FACTOR = 10;