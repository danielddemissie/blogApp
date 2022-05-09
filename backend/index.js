const express = require('express');
const cors = require('cors');
require('dotenv').config();
const conn = require('./dbconfig');
const userRoutes = require('./routes/user');
const newsRoutes = require('./routes/news');
const commentRoutes = require('./routes/comment');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  res.send(
    `<html>
      <div class = "center">
        <h1>
        This is my API for news feed app
        </h1>
        <ol>
          <li>
            <h3>
            use /news to get All news
            </h3>
          </li>
          <li>
            <h3>
            use /news to get All news
            </h3>
          </li>
          <li>
            <h3>
            use /news to get All news
            </h3>
          </li>
          <li>
            <h3>
            use /news to get All news
            </h3>
          </li>
          <li>
            <h3>
            use /news to get All news
            </h3>
          </li>
        </ol>
      </div>
    </html>`
  );
});

app.use('/images', express.static(path.join(__dirname, '/images')));

conn(); //connect to mongodb

app.use('/api', userRoutes.userR);

//news

app.use('/api', newsRoutes.newsR);

//comment

app.use('/api', commentRoutes.commentR);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`app runnig in dev at port ${port}`);
});
