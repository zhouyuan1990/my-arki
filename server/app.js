const IS_DEV = process.argv[2] != undefined && process.argv[2].toUpperCase() == 'DEV';

const path = require('path');
const Koa = require('koa');
const Router = require('koa-router');
const convert = require('koa-convert');
const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');
const routers = require('./routes/routers');
const serve = require('koa-static');
const historyApiFallback = require('koa-history-api-fallback');
const WebSocket = require('ws');

let app = new Koa();

// app.use(async(ctx, next) => {
//   const start = new Date();
//   await next();
//   const ms = new Date() - start;
//   console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
// });

app.use(convert.compose([
  bodyParser(),
  logger()
]));

app.use(convert(routers.routes())).use(convert(routers.allowedMethods()));

if (!IS_DEV) {
  app.use(convert(historyApiFallback()));
  app.use(serve(path.resolve('dist')));
}

let port = 8889;
let server = app.listen(port);

//WebSocket
function createWebSocketServer(server, onConnection, onMessage, onClose, onError) {
  let wss = new WebSocket.Server({
    server: server
  });
  wss.broadcast = function broadcast(data) {
    wss.clients.forEach(function each(client) {
      client.send(data);
    });
  };
  onConnection = onConnection || function () {
    console.log('[WebSocket] connected.');
  };
  onMessage = onMessage || function (msg) {
    console.log('[WebSocket] message received: ' + msg);
  };
  onClose = onClose || function (code, message) {
    console.log(`[WebSocket] closed: ${code} - ${message}`);
  };
  onError = onError || function (err) {
    console.log('[WebSocket] error: ' + err);
  };
  wss.on('connection', function (ws) {
    // let location = url.parse(ws.upgradeReq.url, true);
    // console.log('[WebSocketServer] connection: ' + location.href);
    ws.on('message', onMessage);
    ws.on('close', onClose);
    ws.on('error', onError);
    // if (location.pathname !== '/ws/chat') {
    //   ws.close(4000, 'Invalid URL');
    // }
    // check user:
    // let user = parseUser(ws.upgradeReq);
    // if (!user) {
    //   ws.close(4001, 'Invalid user');
    // }
    // ws.user = user;
    ws.wss = wss;
    onConnection.apply(ws);
  });
  console.log('WebSocketServer was attached.');
  return wss;
}

app.wss = createWebSocketServer(server);

console.log(`[Myarki] listening on port ${port}.`);
if (IS_DEV) {
  console.log('[Myarki] DEV mode on. Please run "npm run dev" to start front-end server.');
}

module.exports = app;
