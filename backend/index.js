
const express = require('express')

require('dotenv').config()
const app = express()
port = process.env.PORT

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


