const express = require("express")
const app = express()
const userRouter = require('./routers/userRouter')
const postRouter = require('./routers/postRouter')

app.use(express.json())

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.use('/users', userRouter)
app.use('/posts', postRouter)

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})



