const models = require('../Models/Model');

const commentsController = {
    addComment : async (req, res, next) => {
        try {
            const { webId } = req.params;
            const { name, comment, rating } = req.body
            const newComment = await models.Comment.create({
                webId,
                name,
                comment,
                rating
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
            const comment = await models.Comment.find({ webId });
    
            if (!comment) {
                console.error('comment not found for webId:', webId);
                return res.status(404).json({ error: 'comment not found' });
            }
    
            const allComments = comment;
            // console.log(allComments)
            res.locals.allComments = allComments;
            return res.status(200).json(allComments)
        } catch (error) {
            console.error(error, 'error getting comments');
            return res.status(500).json({ error: 'Internal server error' });
        }
    },
    deleteComment: async (req, res, next) => {
        try {
          const id = req.params.id;
          const deletedComment = await models.Comment.findByIdAndDelete(id);
    
          if (!deletedComment) {
            res.status(404).json({ message: 'User not found' });
          } else {
            res.status(200).json(deletedComment);
          }
        } catch (err) {
          console.error(err);
          res.status(500).json({ error: 'An error occurred while deleting the user' });
        }
      },
}

module.exports = commentsController