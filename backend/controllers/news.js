const News = require("../models/news");
const newsControllers = {
  addNews: async (req, res) => {
    try {
      const news = await News.create({
        ...req.body,
      });

      res.send({
        message: "News created successfully",
        data: news,
        success: 1,
      });
    } catch (error) {
      res.send({
        message: error.message,
        data: "",
        success: 2,
      });
    }
  },

  upload: async (req, res) => {
    try {
      res.send({
        message: "image uploaded successfully.",
      });
    } catch (error) {
      res.send({
        message: "image upload error.",
      });
    }
  },

  updateNews: async (req, res) => {
    try {
      const { _id } = req.params;
      const { title, desc } = req.body;
      const news = await News.findOne({
        _id,
      });

      if (title) {
        news.title = title;
      }
      if (desc) {
        news.desc = desc;
      }

      await news.save();
      return res.send({
        message: "News updated",
        data: news,
        success: 1,
      });
    } catch (error) {
      res.send({
        message: error.message,
        data: "",
        success: 2,
      });
    }
  },

  deleteNews: async (req, res) => {
    try {
      const { _id } = req.params;
      const news = await News.findOne({
        _id,
      });

      await news.remove();

      return res.send({
        message: `News deleted`,
        data: "",
        success: 1,
      });
    } catch (error) {
      return res.send({
        message: error.message,
        data: "",
        success: 2,
      });
    }
  },

  findNews: async (req, res) => {
    try {
      const { _id } = req.params;
      const news = await News.findOne({
        _id,
      });
      return res.send({
        message: "News found",
        data: news,
        success: 1,
      });
    } catch (error) {
      res.send({
        message: "News not found",
        data: "",
        success: 2,
      });
    }
  },

  findAllNews: async (req, res) => {
    try {
      const news = await News.find();
      return res.send({
        message: "News found",
        data: news,
        success: 1,
      });
    } catch (error) {
      res.send({
        message: "News not found",
        data: "",
        success: 2,
      });
    }
  },
};

module.exports = newsControllers;
