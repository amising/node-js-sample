var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))
console.log("app.js:",process.toLocaleString());

app.get('/', function(request, response) {
  response.send('Hello World! MSFT:x-code='+process.env.xcode);

   console.log(process.env.xcode || "default");
 // console.log(process.env.APPSETTING_x-code);
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})


