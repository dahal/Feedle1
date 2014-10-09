// Require modules installed
var express         = require('express')
var mongoose        = require('mongoose')
var app             = express()

// Setup port
var port = process.env.PORT || 8080

// Start app
app.listen(port)
console.log('Feedle loading on: http://localhost:' + port)