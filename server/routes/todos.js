const express  = require("express");
const router = express.Router();

const { getTodos } = require("../controllers/todoController");

router
  .route("/")
  .get(getTodos);
//   .post(addTodo);

// router
//     .route("/:id")
//     .get(getTodo)
//     .put(updateTodo)
//     .delete(deleteTodo);

module.exports = router;

