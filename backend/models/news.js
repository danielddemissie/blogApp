const { Schema, model, Types } = require("mongoose");

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    tags: [
      {
        type: String,
      },
    ],
    desc: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    // video: {
    //   type: String,
    // },
    // username: {
    //   type: String,
    //   required: true,
    // },
    category: {
      type: String,
    },
    like: {
      type: Number,
    },
    comment: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

const Post = model("Post", postSchema);
module.exports = Post;
