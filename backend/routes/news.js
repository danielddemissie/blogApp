const { Router } = require("express");
const route = Router();
const newsControllers = require("../controllers/news");
const uploadMiddleware = require("../middleware/upload");

const newsRoutes = {
  newsR: route.post("/news/addnews", newsControllers.addNews),
  newsR: route.post("/news/upload", uploadMiddleware, newsControllers.upload),
  newsR: route.get("/news", newsControllers.findAllNews),
  newsR: route.put("/news/:_id", newsControllers.updateNews),
  newsR: route.get("/news/:_id", newsControllers.findNews),
  newsR: route.delete("/news/:_id", newsControllers.deleteNews),
};

module.exports = newsRoutes;
