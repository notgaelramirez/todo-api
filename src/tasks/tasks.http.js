const {getAllTasks, getTaskById, createTask, updateTask, deleteTask, verifyID} = require('./tasks.controllers')

const getAll = (req, res) =>{
  const data = getAllTasks()
  res.status(200).json({
    items: data.length,
    response: data
  })
}

const getById = (req, res ) =>{
  const id = Number(req.params.id)
  const verified = verifyID(id)
  if(verified){
    console.log(id)
    const data = getTaskById(id)
    res.status(200).json(data)
  } else{
    res.status(400).json({message: 'Invalid ID'})
  }
}

const createNew = (req, res) =>{
  const taskObj = req.body
  // The task description is optional and the status is false by default
  if(taskObj.task && taskObj.deadline){
    createTask(taskObj)
    res.status(200).json({message: 'Ok'})
  } else{
    res.status(400).json({message: 'Missing or invalid data'})
  }
}

const updateById = (req, res) =>{
  const id = Number(req.params.id)
  const taskObj = req.body
  if(taskObj.task && taskObj.deadline){
    if(verifyID(id)){
      updateTask(id, taskObj)
      res.status(200).json({message: 'Updated.'})
    } else{
      res.status(400).json({message: 'Invalid ID'})
    }
  } else{
    res.status(400).json({message: 'Missing data'})
  }
}

const deleteById = (req, res) =>{
  const id = Number(req.params.id)
  if(verifyID(id)){
    deleteTask(req, res)
    console.log(deleteTask(id))
    res.status(200).json({message: 'Deleted'})
  } else{
    res.status(400).json({message: 'Invalid ID'})
  }
}

module.exports ={
  getAll,
  getById,
  createNew,
  updateById,
  deleteById
}