const { model } = require('mongoose');
const models = require('../Models/Model');

const commentsController = {
    addComment : async (req, res, next) => {
        try {
            const { webId } = req.params;
            const { userId, comment } = req.body

            console.log('Reviewed web ID', webId)
            const newComment = await models.Comment.create({
                webId,
                userId,
                comment
            })

            res.locals.newComment = newComment

            return next ()
            }
        catch (error) {
            console.log(error, "error adding new comment")
            res.status(500).json({error: "Interal server error"})
        }
    },
    getAllComments: async (req, res, next) => {
        try {
            const { webId } = req.params;
            const comment = await models.Comment.findOne({ webId });
    
            if (!comment) {
                console.error('comment not found for webId:', webId);
                return res.status(404).json({ error: 'comment not found' });
            }
    
            const allComments = comment; // Assuming comments are stored in the comment's comments array
            // console.log(allComments)
            res.locals.allComments = allComments;
            return res.status(200).json(allComments)
        } catch (error) {
            console.error(error, 'error getting comments');
            return res.status(500).json({ error: 'Internal server error' });
        }
    }
}

module.exports = commentsController