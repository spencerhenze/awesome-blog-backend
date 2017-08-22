var express = require ("express")
var bodyParser = require ('body-parser')
var mongoose = require("mongoose")
var cors = require("cors")
var database = require("./config/dbconfig")
var server = express();

server.use(cors());

server.use(bodyParser.json());

var blogRouter = require('./routes/blog-routes');
server.use('/api/blogs', blogRouter);