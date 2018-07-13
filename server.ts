import { Server } from 'ws';
const wsServer = new Server({ port: 5100 });
wsServer.on('connection', websocket => {
    websocket.send("这个消息是服务器主动推送的");
    websocket.on('message', message => {
        console.log('接收消息' + message)
        if (message == "关我屁事") {
            websocket.send('行吧 行吧')
        }
    })
})
