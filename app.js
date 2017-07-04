const IS_DEV = process.argv[2] != undefined && process.argv[2].toUpperCase() == 'DEV';

const path = require('path');
const Koa = require('koa');
const Router = require('koa-router');
const convert = require('koa-convert');
const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');
const routers = require('./server/routes/routers');
const serve = require('koa-static');
const historyApiFallback = require('koa-history-api-fallback');

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

app.listen(port);

console.log(`[Myarki] listening on port ${port}.`);
if (IS_DEV) {
  console.log('[Myarki] DEV mode on. Please run "npm run dev" to start front-end server.');
}

module.exports = app;