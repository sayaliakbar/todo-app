const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide a title"],
        trim: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    });

module.exports = mongoose.model("Todo", TodoSchema);

