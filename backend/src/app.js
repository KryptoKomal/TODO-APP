const express = require('express')
const app= express();
const todoRoutes = require('./routes/todo_routes.js')
app.use(express.json())