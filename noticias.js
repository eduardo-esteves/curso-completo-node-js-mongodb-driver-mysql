const http = require('http');

http.createServer( (req,resp) => {
  resp.end("<html><body><p>Hello World!</p></body></html>");
}).listen(4200);