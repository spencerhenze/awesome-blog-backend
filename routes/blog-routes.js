var express = require('express')
var router = express.Router()

var Blogs = require('../models/blog')

// get requests
router.post('/', (req, res, next) => {
    Blogs.create(req.body)
        .then(() => {
            res.send({ message: "Article Successfully Posted" })
        })
        .catch(next);
})

router.get('/:blogId', (req, res, next) => {
    var blogId = req.params.blogId

    Blogs.findById(blogId)
        .then((blog) => {
            res.send(blog)
        })
        .catch(next)
})


router.get('/', (req, res, next) => {
        Blogs.find({})
            .then((blogs) => {
                res.send(blogs)
            })
            .catch(next)
    })


router.use(defaultErrorHandler)

function defaultErrorHandler(err, req, res, next) {
        console.log(`User @${req.connection.remoteAddress} sent faulty request`);
        if (req.connection.encrypted) {
            console.log(`User on encrypted protocol attempting to use ${req.method}`);
        } else {
            console.log(`User on open protocol attempting to use ${req.method}`);
        }
        res.json({ success: false, error: err.message });
    }

module.exports = router;
