if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const cors = require('cors')
const router = require('./routes/index.js')
const app = express()
const port = process.env.PORT

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello Database!" })
})

app.use(router)

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

module.exports = app