const express = require("express");
const router = express.Router();

const {
  getTodos,
  addTodo,
  deleteTodo,
  updateTodo,
  toggleTodoStatus,
} = require("../controllers/todoController");

router.route("/").get(getTodos).post(addTodo);

router.route("/:id").put(updateTodo).delete(deleteTodo);

router.route("/:id/toggle").put(toggleTodoStatus);

module.exports = router;
