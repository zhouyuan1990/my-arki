const Router = require('koa-router');

let api = new Router();

api.get('/get', async(ctx) => {
  if (ctx.method === 'GET') {
    let url = ctx.url;
    let query = ctx.query;
    let queryString = ctx.queryString;

    ctx.body = {
      url, query, queryString
    };
  }
});

api.post('/post', async(ctx) => {
  ctx.body = ctx.request.body;
  ctx.body.status = 'OK';
});

module.exports = api;