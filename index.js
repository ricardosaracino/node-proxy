// https://github.com/nodejitsu/node-http-proxy

var httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer({target:'http://localhost:80'}).listen(8089);