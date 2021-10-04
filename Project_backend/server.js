import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import Data from './data.js'
import Login from './dbModel.js'

const app = express()
const port = 9000

app.use(cors())
app.use(express.json())

const connection_url =
  'mongodb+srv://admin:wy7GnPbm7CrNExQN@cluster0.btqt2.mongodb.net/login-database?retryWrites=true&w=majority'
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
app.get('/', (req, res) => res.status(200).send('hello world'))

app.get('/admin', (req, res) => res.status(200).send(Data))

app.get('/admin/post', (req, res) => {
  Login.find((err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).send(data)
    }
  })
})

app.post('/admin/post', (req, res) => {
  const dbLogin = req.body
  Login.create(dbLogin, (err, Data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(201).send(Data)
    }
  })
})

app.listen(port, () => {
  console.log(`listening in port ${port}`)
})
