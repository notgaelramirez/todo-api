const todoDB = [
  {
    "id": 1,
    "task": "Dishes",
    "status": false,
    "deadline": "Today",
    "description": "Gael has to wash the dishes before dinner"
  }
];

//? Starts with one task for test purposes

/*
  task: "",
  status: "",
  deadline: "",
  description: ""
*/

const getAllTasks = () => {
  return todoDB;
}

const getTaskById = (id) => {
  const filtered = todoDB.filter(task => task.id === id)
  return filtered[0];
}

const createTask = (taskObj) => {
  if (todoDB.length === 0) {
    const newTask = {
      id: 1,
      task: taskObj.task,
      status: false,
      deadline: taskObj.deadline,
      description: taskObj.description,
    };

    todoDB.push(newTask);
    return newTask;
  } else {
    const newTask = {
      id: todoDB[todoDB.length - 1].id + 1,
      task: taskObj.task,
      status: false,
      deadline: taskObj.deadline,
      description: taskObj.description,
    };

    todoDB.push(newTask);
    return newTask;
  }
}


const updateTask = (id, taskObj) => {
  const index = todoDB.findIndex((task) => task.id === id);

  if (index !== -1) {
    const newTask = {
      id: id,
      task: taskObj.task,
      status: taskObj.status,
      deadline: taskObj.deadline,
      description: taskObj.description,
    };

    todoDB[index] = newTask;
    return newTask;
  }
};

const deleteTask = (id) => {
  const index = todoDB.findIndex((task) => task.id === id);

  if (index !== -1) {
    todoDB.splice(index, 1);
    console.log(index)
    console.log(todoDB)
    return todoDB
  }
}

// I made a controller for veryfying if the ID exists
const verifyID = (id) =>{
  const index = todoDB.findIndex((task) =>task.id === id)
  if (index !== -1){
    return true
  } else {
    return false
  }
}

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  deleteTask,
  updateTask,
  verifyID
};
