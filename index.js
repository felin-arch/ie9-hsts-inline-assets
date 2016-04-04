var koa = require('koa');
var ssl = require('koa-ssl');
var app = koa();
app.use(ssl({ disabled: false, trustProxy: true }));
app.use(require('koa-static')(__dirname + '/public/'));

app.listen(process.env.PORT || 3000);
console.log('listening');
