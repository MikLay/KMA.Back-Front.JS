const path = require('path');

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "..", "..", "client.html"));
  });

  app.get('/admin', function(req, res){
    res.sendFile(path.join(__dirname, "..", "..", "admin.html"));
  });

};
