const express = require('express');
const app = express();
const taskRouter = require('./tasks/tasks.router').router

app.use(express.json());

app.use('/api/v1/tasks', taskRouter)

app.listen(8000, ()=>{
  console.log('Server started at port 8000.');
});