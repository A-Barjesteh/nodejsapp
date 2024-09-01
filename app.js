var http = require('http'); 
var fs = require("fs")

fs.readFile("lol.jpg", function(err,data) {
  if (err) throw err;

  http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'}) //http header

    var url = req.url

    if(url==='/about'){
      res.writeHead(200, {'Content-Type': 'image/jpeg'})
      //res.write('<h1>about us page<h1>'); 
      res.end(data);
    }
    else if(url==='/contact'){
      res.write('<h1>contact us page<h1>');
      res.end();
    }
    else{
      res.write('Hello World!'); //write a response
      res.end(); //end the response
    }
  }).listen(3000, function(){
  console.log("server start at port 3000"); //the server object listens on port 3000
  });
});