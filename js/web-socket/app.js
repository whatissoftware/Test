var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({ port: 9000 });

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
        ws.send("server" + message);
    });

    ws.on('close',function close () {
        console.log('close');
    });

    console.log('connection');
    ws.send('hello');

});