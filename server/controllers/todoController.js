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
      data: todos,
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

exports.addTodo = async (req, res)=>{
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
}