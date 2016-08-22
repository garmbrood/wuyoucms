var connect = require('connect');
var serveStatic = require('serve-static');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
//var qs = require('qs');

var app = connect();

// Middleware
app.use(serveStatic(__dirname + '/public'));
app.use(cookieParser());

/*app.use("/hello/", function (req, res, next) {
    var data = "优优，你好！";
    res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8'
    });
    res.end(data);
});*/

app.listen(80);