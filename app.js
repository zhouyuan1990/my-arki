const path = require('path');
const Koa = require('koa');
const Router = require('koa-router');
const convert = require('koa-convert');
const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');
const serve = require('koa-static');
const historyApiFallback = require('koa-history-api-fallback');
const routers = require('./server/routes/routers');
// const config = require('./server/configs/config');

let app = new Koa();

app.use(convert(routers.routes())).use(convert(routers.allowedMethods()));

app.use(convert.compose([
  bodyParser(),
  logger(),
  historyApiFallback()
]));

app.use(serve(path.resolve('dist')));

app.use(async(ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});


// let port = config.port;
// app.listen(port);

let port = 8889;

app.listen(port);

console.log(`[Myarki] listening on port ${port}`);

module.exports = app;