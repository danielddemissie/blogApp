const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },

  filename: (req, file, cb) => {
    console.log(req.body.name);
    cb(null, req.body.name);
  },
});

const isImage = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new Error("Only image is allowed."));
  }
};

const uploadMiddleware = multer({
  storage: storage,
  fileFilter: isImage,
}).single("image");

module.exports = uploadMiddleware;
