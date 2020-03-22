const express = require('express')
const {
  getTodo,
  getAllTodo,
  createTodo,
  deleteTodo
} = require('./controller')

const app = express()
app.locals.dataFilePath = "./data.json"

const port = 3000

app.use(express.json())
app.get('/', (req, res) => res.send('<h1>Todo-list</h1>'))

app.get("/api/tasks/:id", getTodo)
app.get("/api/tasks", getAllTodo)

app.post("/api/tasks", createTodo)

app.delete("/spi/tasks/:id", deleteTodo)

app.listen(port, () => console.log(`our server has been setup,and listen on the port: ${port}!`))

exports.app = app
