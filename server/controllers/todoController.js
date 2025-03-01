const Todo = require("../models/Todo");

// @desc Get all todos
// @route GET /api/todos
// @access Public

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();

    return res.status(200).json({
      success: true,
      count: todos.length,
      todoList: todos,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc Add a todo
// @route POST /api/todos
// @access Public

exports.addTodo = async (req, res) => {
  console.log(req.body);
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({
        success: false,
        error: "Please provide a todo item",
      });
    }

    const todo = await Todo.create(req.body);

    return res.status(201).json({
      success: true,
      data: todo,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc Delete a todo
// @route DELETE /api/todos/:id
// @access Public

exports.deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      return res.status(404).json({
        success: false,
        error: "No todo found",
      });
    }

    await todo.deleteOne();

    return res.status(200).json({
      success: true,
      message: "Todo deleted",
      data: todo,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc Update a todo
// @route PUT /api/todos/:id
// @access Public

exports.updateTodo = async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({
        success: false,
        error: "Please provide a todo item",
      });
    }

    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      return res.status(404).json({
        success: false,
        error: "No todo found",
      });
    }

    await todo.updateOne(req.body);

    return res.status(200).json({
      success: true,
      message: "Todo updated",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc Toggle todo completion status
// @route PATCH /api/todos/:id/toggle
// @access Public

exports.toggleTodoStatus = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      return res.status(404).json({
        success: false,
        error: "No todo found",
      });
    }

    todo.completed = !todo.completed;
    await todo.save();

    return res.status(200).json({
      success: true,
      data: todo,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
