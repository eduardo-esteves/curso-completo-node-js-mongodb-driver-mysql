const http = require('http');

http.createServer( (req,resp) => {

  const categoria = req.url;

  if( categoria === '/tecnologia' )
    resp.end("<html><body><p>Noticias de Tecnologia!</p></body></html>");
  else if( categoria === '/moda' )
    resp.end("<html><body><p>Noticias de Moda!</p></body></html>");
  else if( categoria === '/beleza' )
    resp.end("<html><body><p>Noticias de Beleza!</p></body></html>");
  else
    resp.end("<html><body><p>Bem vindo a página principal!</p></body></html>");
    
}).listen(4200);