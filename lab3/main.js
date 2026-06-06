const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const app = express()
const errorHandler = require('./middlewares/errorHandler')


const userRouter = require('./routers/userRouter')
const postRouter = require('./routers/postRouter')
dotenv.config()


app.use(express.json())

app.use('/users', userRouter)
app.use('/posts', postRouter)

app.use(errorHandler)


  
app.listen(3000, async () => {
  console.log('Server is running on port 3000')
  mongoose.connect('mongodb://localhost:27017/mydb').then(() => {
  console.log('✅✅Connected to MongoDB')
  }).catch(err => {
    console.error('❌❌Failed to connect to MongoDB', err)
  });
})

