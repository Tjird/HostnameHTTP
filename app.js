const Koa = require('koa');
const app = new Koa();
var os = require("os");
var hostname = os.hostname();

// response
app.use(ctx => {
  ctx.body = `You are on ${hostname} now.`;
});

app.listen(80);