const express = require('express');
const router = express.Router();

const Todo = require('../models/todo.model');

router.post('/add', async (req, res) => {
  try {

    const { title } = req.body;

    const newTodo = new Todo({
      title
    });

    await newTodo.save();

    res.status(201).json({
      message: "Task Added Successfully",
      data: newTodo
    });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});


module.exports = router;