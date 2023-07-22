const express = require('express')

module.exports = (server) => {
    const router = express.Router()
    server.use('/api', router)

    const todoService = require('../../api/todo/todoservice')
    todoService.register(router, '/todos')
}
