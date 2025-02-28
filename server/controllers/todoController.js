const Todo = require("../models/Todo");

// @desc Get all todos
// @route GET /api/v1/todos
// @access Public
exports.getTodos = async (req, res, next) => {
    console.log("getTodos");
  try {
    const todos = await Todo.find();

    return res.status(200).json({
      success: true,
      count: todos.length,
      data: todos,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};