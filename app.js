var express = require('express');
var compression = require('compression');
var httpProxy = require('http-proxy');

var apiProxy = httpProxy.createProxyServer();
var app = express();

app.use(compression());

apiProxy.on('error', function(err, req, res){
	res.writeHead(200);
	res.end('test');
});

app.get("/v2/*", function(req, res){ 
	apiProxy.web(req, res, { target: 'http://api.joery.nl/' });
});

app.use('/assets', express.static('public'));

app.get('/*', function(req, res) {
    var userAgent = req.headers['user-agent'];
    
	/*if (userAgent.startsWith('facebookexternalhit/1.1') ||
		userAgent === 'Facebot' ||
		userAgent.indexOf('Twitterbot') !== -1) {
		
		// Proxy to phantomJS
        apiProxy.web(req, res, { target: 'http://localhost:3000/' });
    } else*/
		res.sendFile(__dirname + '/public/index.html')
});

app.listen(8082, function () {
	console.log('Frontend listening on port 8082')
})