const { Router } = require('express');
const route = Router();
const commentController = require('../controllers/comment');

const commentRouts = {
  commentR: route.post('/comment/add/:_id', commentController.addComment),
  commentR: route.delete('/comment/:_id', commentController.deleteComment),
  commentR: route.get('/comment/deleteall', commentController.deleteAll),
  commentR: route.get('/comment/all', commentController.getAllComment),
  commentR: route.put('/comment/:_id', commentController.editComment),
  commentR: route.put('/comment/like/:_id', commentController.likeComment),
  commentR: route.put(
    '/comment/dislike/:_id',
    commentController.dislikeComment
  ),
};

module.exports = commentRouts;
