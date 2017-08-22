var mongoose = require("mongoose")
var connection = mongoose.connection

var status =   `connecting to database... `

mongoose.connect("mongodb://student:student@ds153113.mlab.com:53113/blog_db_henze"), {
    server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000} },
    replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000} }
    
}

connection.on('error', (err) => {
    status += 'mlab Error', err;
    console.log(status)
})

connection.once('open', (err) => {
    status += `\nconnected to mlab`
    console.log(status)
})
