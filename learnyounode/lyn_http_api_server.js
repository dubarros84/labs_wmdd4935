var http = require('http')
var url = require('url')



var server = http.createServer(function (req, res) {
  var parsedUrl = url.parse(req.url, true)
  
  var result

  if (/^\/http_jason_api/.test(req.url)) {
    
   result ={"status":"sucess"}
    
  } else if (/^\/http_jason_api/.test(req.url)) {
   
   result ={"status":"fails"}
   
  }

  if (result) {
   
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
    
  } else {
 
    res.writeHead(404)
    res.end()
  }
})


server.listen(Number(3009))