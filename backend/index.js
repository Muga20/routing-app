
const express = require('express')

require('dotenv').config()

const cors = require('cors')
const app = express()
port = process.env.PORT

app.use(cors())

app.get('/users', (req, res) => {
  res.json(users)
});
const users=[{
  "id": "1",
  "name" : "Mark John",
  "email" :"markjohn@gmail.com",
  "age"  :"22"

},
{
  "id": "2",
  "name" : "Sheila Anne",
  "email" :"sheila@gmail.com",
  "age"  :"20" 
}
];

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


