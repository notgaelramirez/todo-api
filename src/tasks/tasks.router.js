const router = require('express').Router()
const httpTasks = require('./tasks.http')

router.route('/')
  .get(httpTasks.getAll)
  .post(httpTasks.createNew)

router.route('/:id')
  .get(httpTasks.getById)
  .put(httpTasks.updateById)
  .delete(httpTasks.deleteById)

module.exports = {
  router
}