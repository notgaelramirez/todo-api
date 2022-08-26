# Order

Routes: 

'/api/v1/tasks' :
  GET: Responses with the account of tasks and the tasks. 

  POST: Requires a body with an object that contains:
        Task, deadline, status (optional) and description (optional).

'/api/v1/tasks/:id' :
  GET: Responses with the especific task that is send in the URL parameters.

  PUT: Updates the task, it can be used for changing the  status from false to true. Requires an body with an object that contains the new task and the deadline.

  DELETE: Eliminates the task.


  

