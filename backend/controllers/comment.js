const Comment = require('../models/comment');

const commentController = {
  addComment: async (req, res) => {
    try {
      const { body } = req.body;

      if (body.length > 1) {
        const newComment = await Comment.create({
          ...req.body,
        });
        await newComment.save();
        return res.send({
          message: 'comment created...',
          data: newComment,
        });
      } else {
        return res.send({
          message: 'comment cannot added...',
          data: '',
        });
      }
    } catch (error) {
      return res.send({
        message: 'comment not created...',
        data: '',
      });
    }
  },

  getAllComment: async (req, res) => {
    try {
      const allComments = await Comment.find();
      return res.send({
        message: 'all comments...',
        data: allComments,
      });
    } catch (error) {
      return res.send({
        message: 'comment not found...',
        data: '',
      });
    }
  },

  deleteComment: async (req, res) => {
    try {
      const { _id } = req.params;
      const commentTodelete = await Comment.findOne({
        _id,
      });

      await commentTodelete.remove();
      return res.send({
        message: 'comment deleted ...',
        data: '',
      });
    } catch (error) {
      return res.send({
        message: 'comment not found...',
        data: '',
      });
    }
  },

  deleteAll: async (req, res) => {
    try {
      await Comment.deleteMany({
        body: '',
      });
      return res.send({
        message: 'comment deleted ...',
        data: '',
      });
    } catch (error) {
      return res.send({
        message: 'comment not found ' + error.message,
        data: '',
      });
    }
  },

  editComment: async (req, res) => {
    try {
      const { _id } = req.params;
      const { body } = req.body;
      const oldComment = await Comment.findOne({
        _id,
      });

      if (body) {
        oldComment.body = body;
      }

      await oldComment.save();
      return res.send({
        message: 'comment updated ...',
        data: oldComment,
      });
    } catch (error) {
      return res.send({
        message: 'comment not found ...',
        data: '',
      });
    }
  },

  //like
  dislikeComment: async (req, res) => {
    try {
      const { _id } = req.params;
      const likedComment = await Comment.findOne({
        _id,
      });

      if (likedComment) {
        likedComment.dislike += 1;
      }
      await likedComment.save();
      return res.send({
        message: 'comment disliked ...',
        data: '',
      });
    } catch (error) {
      return res.send({
        message: 'comment not found ' + error.message,
        data: '',
      });
    }
  },

  likeComment: async (req, res) => {
    try {
      const { _id } = req.params;
      const likedComment = await Comment.findOne({
        _id,
      });

      if (likedComment) {
        likedComment.like += 1;
      }
      await likedComment.save();
      return res.send({
        message: 'comment liked ...',
        data: '',
      });
    } catch (error) {
      return res.send({
        message: 'comment not found ' + error.message,
        data: '',
      });
    }
  },
};

module.exports = commentController;
