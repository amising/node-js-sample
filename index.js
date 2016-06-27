var express = require('express')
var app = express()
var nconf = require('nconf')

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))
//console.log("app.js:",process.toLocaleString());
//nconf.argv().env().file({file: './config.json'});

/*
nconf.file({ file: __dirname + '/local.env.json' });
var domain = nconf.get('DOMAIN');
*/

nconf.argv().env().file("settings.json");
app.get('/', function(request, response) {
  response.send('Hello World! MSFT:x-code='+process.env.xcode);

   console.log(process.env.xcode || "default");
 // console.log(process.env.APPSETTING_x-code);
    console.log("nconf stuff:"+nconf.get('xcode'));
    console.log("nconf env stuff:"+nconf.env().get('xcode'));
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
    console.log("cmd args:"+nconf.get('env'));
    console.log("cmd args:"+nconf.get('name'));
    console.log("cmd args:"+nconf.get('country'));
    console.log("cmd args:"+nconf.get('xcode'));
})


