const { Schema, model, Types } = require('mongoose');

const commentSchema = new Schema(
  {
    username: String,
    body: String,
    parentId: {
      default: null,
      type: Types.ObjectId,
    },
    like: {
      default: 0,
      type: Number,
    },
    dislike: {
      default: 0,
      type: Number,
    },
  },
  { timestamps: true }
);

const Comment = model('Comment', commentSchema);
module.exports = Comment;
