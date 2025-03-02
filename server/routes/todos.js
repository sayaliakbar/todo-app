const express = require("express");
const router = express.Router();

const {
  getTodos,
  addTodo,
  deleteTodo,
  updateTodo,
  toggleTodoStatus,
  deleteSelectedTodos,
} = require("../controllers/todoController");

router.route("/").get(getTodos).post(addTodo);

router.route("/deleteSelected").delete(deleteSelectedTodos);

router.route("/:id").put(updateTodo).delete(deleteTodo);

router.route("/:id/toggle").put(toggleTodoStatus);

module.exports = router;
