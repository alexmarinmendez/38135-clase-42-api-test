import express from 'express'
import MongoClient from './src/models/MongoClient.js'
import userRouter from './src/routes/userRoute.js'

const app = express()
const server = app.listen(8080, () => console.log('Server up'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
new MongoClient()

app.use('/users', userRouter)