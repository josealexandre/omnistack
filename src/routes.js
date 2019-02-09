const express = require("express");

const routes = express.Router();

const tweetController = require("./controllers/TweetController");
const likeController = require("./controllers/LikeController");

routes.get("/tweets", tweetController.index);
routes.post("/tweets", tweetController.store);
routes.post("/like/:id", likeController.store);

module.exports = routes;
