"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ws_1 = require("ws");
var wsServer = new ws_1.Server({ port: 5100 });
wsServer.on('connection', function (websocket) {
    websocket.send("这个消息是服务器主动推送的");
    websocket.on('message', function (message) {
        console.log('接收消息' + message);
        if (message == "关我屁事") {
            websocket.send('行吧 行吧');
        }
    });
});
