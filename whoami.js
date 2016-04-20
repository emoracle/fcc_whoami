'use strict';

var
express = require("express"),
app = express(),
port = process.env.PORT || 8080;

app.get('/whoami/', function (req, res) {
  res.send(JSON.stringify({
      ipadress : req.headers["x-forwarded-for"],
      language : req.headers["accept-language"].substr(req.headers["accept-language"], req.headers["accept-language"].indexOf(",")),
      software : req.headers["user-agent"].substring(req.headers["user-agent"].indexOf("(") + 1, req.headers["user-agent"].indexOf(")"))
    }));
});

app.listen(port, function () {
  console.log('Node.js listening on port ' + port + '...');
});
