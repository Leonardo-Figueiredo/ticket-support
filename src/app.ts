import express from 'express'
import 'reflect-metadata'
import 'dotenv/config'

const server = express()
const port = 3000

server.get('/', (request, response) => {
  response.send('Hello world')
})

console.log(`Server started on port ${port} 🚀`)

server.listen(port)
