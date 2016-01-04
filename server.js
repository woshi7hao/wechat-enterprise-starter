var app = require("express")(),
  serveStatic = require('serve-static'),
  bodyParser = require('body-parser'),
  go = require('./backend/GlobalObject'),
  wechatRouter = require('./backend/router/WeChatRouter');

var checkUser = function(req,res,next){
  if(req.method == "GET"){
    next();
  } else{
    console.log(req.body);
    if(req.body && req.body.username && req.body.password) {
      var username = req.body.username;
      var pwd = req.body.password;

      if(username === "test"&&pwd === "test"){
          console.log("Authorized!");
          next();
      }
      else{
        res.status(401).send("Unauthorized user!");
      }
    }
    else{
        res.status(401).send("Unauthorized user!");
    }
  }
};

var allowCrossDomain = function(req, res, next) {
    console.log("get request!");
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    //res.header('Access-Control-Allow-Credentials',true);
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
};

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(checkUser);
app.use(allowCrossDomain);
app.use('/wechatenterprise', wechatRouter);

//welcome
app.get('/', function(req, res) {
  res.status(200).send("Welcome to frank's node server!");
});

app.listen(18080, function() {
  console.log("connect successful! Listen 18080!");
});