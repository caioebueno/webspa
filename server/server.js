const express = require('express')
const http = require('http')
const app = express()
const PORT = 1010


//AUTHENTICATION ROUTES
require('./routes/auth')(app)

var server = http.createServer(app);
server.listen(process.env.PORT || PORT);
console.log(`Server listning on port ${PORT}`)