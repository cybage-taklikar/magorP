module.exports = app => {
  const questions = require("../controllers/question.controller.js");

  var router = require("express").Router();
  const cors = require("cors");
  router.use(cors());
  const bodyParser = require("body-parser");

  router.use(bodyParser.json());

  // Create a new Question
  router.post("/", questions.create);

  // Retrieve all Questions
  router.get("/", questions.findAll);

  // // Retrieve all published Questions
  // router.get("/published", questions.findAllPublished);

  // Retrieve a single Question with id
  router.get("/:id", questions.findOne);

  // // Update a Question with id
  router.put("/:id", questions.update);

  // // Delete a Question with id
  router.delete("/:id", questions.delete);

  // // Delete all Questions
  router.delete("/", questions.deleteAll);

  app.use('/api/questions', router);
};