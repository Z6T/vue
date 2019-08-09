const http = require('http')
http
  .createServer(function (req, res) {
    res.write('Good')
    res.end()
  })
  .listen(9009)
