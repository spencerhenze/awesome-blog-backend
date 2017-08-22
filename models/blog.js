var mongoose = require("mongoose")
var ObjectId = mongoose.Schema.ObjectId

var blogSchema = new mongoose.Schema ({
    title: {type: String, required: true},
    body: {type: String, required: true},
    created: {type: Date, default: new Date()},

    //Relationships
    // userId: {type: ObjectID, ref: "User"}
})