const express = require('express');
const router = express.Router();

const commentsController = require('../Controllers/CommentsController')



router.get('/api/products/:webId/comments', commentsController.getAllComments, (req, res, next) => {
    res.status(200).json(res.locals.allComments)
})

router.post('/api/products/:webId/add-comment', commentsController.addComment, (req, res, next) => {
    res.status(200).json(res.locals.newComment)
})

// router.post('/delete-comment', commentsController.deleteComment, (req, res, next) => {
//     res.status(200)
// })

module.exports = router