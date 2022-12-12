const WebSocket=require("ws");

const wss=new WebSocket.Server({port:8002});
wss.on('connection',ws=>{
    console.log('new client connected');
    ws.on('message',data=>console.log(`recived dta ${data}`));
    ws.on('close',()=>{console.log('client disconnected')});
})