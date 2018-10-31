var express = require('express');
var app = express();
var methodOverride = require('method-override');

var port = process.env.PORT || 8080;
var staticdir = process.env.NODE_ENV === 'production' ? 'dist.prod' : 'dist.dev';

app.use(methodOverride('X-HTTP-Method-Override'));
app.use('/assets', express.static(__dirname + '/' + staticdir));

app.get('/*', function(req, res) {
	if(req.path.indexOf('.') === -1)
		res.sendFile(__dirname + '/'+staticdir+'/index.html')
	else
		res.sendFile(__dirname + '/'+staticdir+'/' + req.path)
});

app.listen(port);
console.log('Starting sever on port ' + port);
exports = module.exports = app;