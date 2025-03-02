const express = require("express");
const router = express.Router();

const {
  getTodos,
  addTodo,
  deleteTodo,
  updateTodo,
  toggleTodoStatus,
  deleteSelectedTodos,
  toggleAllTodos,
  updateOrder,
} = require("../controllers/todoController");

router
  .route("/")
  .get(getTodos)
  .post(addTodo)
  .delete(deleteSelectedTodos)
  .put(toggleAllTodos);

router.route("/update-order").put(updateOrder);

router.route("/:id").put(updateTodo).delete(deleteTodo);

router.route("/:id/toggle").put(toggleTodoStatus);

module.exports = router;
