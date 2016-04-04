var koa = require('koa');
var app = koa();
app.use(require('koa-static')(__dirname + '/public/'));

app.listen(process.env.PORT || 3000);
console.log('listening');
