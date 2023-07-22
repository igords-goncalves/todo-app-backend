const bodyParser = require('body-parser')
const express = require('express')

const port = 3000
const server = express()
const allowCors = require('./cors')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(port, () => {
    console.log(`Server running at por ${port}`)
})

module.exports = server