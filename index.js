const server = require('./api/server.js')

const port = process.env.PORT || 3001
server.listen(port, () => console.log(`running on port ${port}`))