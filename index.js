require('dotenv').config()

const server = require('./api/server.js')

const port = process.env.port

server.listen(port, () => console.log(`\nApi running on ${port}\n`))