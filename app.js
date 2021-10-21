if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const cors = require('cors')
const app = express()
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origins: ['http://localhost:8080']
  }
});
const router = require('./routes/index.js')
const port = process.env.PORT

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.get("/", (req, res) => {
//   res.status(200).json({ message: "Hello Database!" })
// })

app.get('/', (req, res) => {
  res.send('<h1>Hey Socket.io</h1>')
});

io.on('connection', (socket) => {

  console.log('a user connected')

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })

  socket.on('my message', (msg) => {
    console.log('message: ' + msg);
  });

  socket.on('my message', (msg) => {
    io.emit('my broadcast', `server: ${msg}`);
  });
});

app.use(router)

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

module.exports = app