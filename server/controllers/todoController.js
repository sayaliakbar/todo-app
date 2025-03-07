const Todo = require("../models/Todo");

// @desc Get all todos
// @route GET /api/todos
// @access Public

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find().sort({ order: 1 });

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
  try {
    const { title } = req.body;
    const todos = await Todo.find().sort({ order: 1 });
    const order = todos.length ? todos[todos.length - 1].order + 1 : 0;

    if (!title) {
      return res.status(400).json({
        success: false,
        error: "Please provide a todo item",
      });
    }

    const todo = await Todo.create({ title, order });

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

// @desc Delete multiple todos
// @route DELETE /api/todos/bulk
// @access Public

exports.deleteSelectedTodos = async (req, res) => {
  try {
    const { ids } = req.body;

    if (!ids || !Array.isArray(ids) || ids.length === 0) {
      return res.status(400).json({
        success: false,
        error: "Please provide an array of todo IDs",
      });
    }

    const result = await Todo.deleteMany({ _id: { $in: ids } });

    if (result.deletedCount === 0) {
      return res.status(404).json({
        success: false,
        error: "No todos found",
      });
    }

    return res.status(200).json({
      success: true,
      message: `${result.deletedCount} todos deleted`,
      deletedCount: result.deletedCount,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

exports.toggleAllTodos = async (req, res) => {
  try {
    const { completed } = req.body;

    if (completed === undefined) {
      return res.status(400).json({
        success: false,
        error: "Please provide a 'completed' field",
      });
    }

    const result = await Todo.updateMany({}, { completed });

    return res.status(200).json({
      success: true,
      message: `All todos set to ${completed}`,
      updatedCount: result.nModified,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

exports.updateOrder = async (req, res) => {
  try {
    const { order } = req.body;

    if (!order || !Array.isArray(order) || order.length === 0) {
      return res.status(400).json({
        success: false,
        error: "Please provide an array of todo IDs",
      });
    }

    // Verify all IDs exist in the database
    const existingTodos = await Todo.find({ _id: { $in: order } });

    if (existingTodos.length !== order.length) {
      return res.status(404).json({
        success: false,
        error: "One or more todo IDs do not exist",
      });
    }

    const bulkOps = order.map((id, index) => ({
      updateOne: {
        filter: { _id: id },
        update: { order: index },
      },
    }));

    await Todo.bulkWrite(bulkOps);

    return res.status(200).json({
      success: true,
      message: "Todo order updated",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
