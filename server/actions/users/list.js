module.exports = function(app){
  return function(req, res, next){
      var skip = 0;

      if(req.query['skip'])
        skip = req.query['skip'];

      app.models.User.find(function(err, users){
          if(err)
              return res.status(500).send(err);

          res.send(users);
      }).sort({ "title" : 1}).skip(skip).limit(10);

  }
};