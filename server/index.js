const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const userRoutes = require('./routes/users')
const roomsRoutes = require('./routes/rooms')
const cors = require('cors')
const path = require('path')

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/rooms', roomsRoutes)
app.use('/api/users', userRoutes)

const PORT = process.env.PORT || 5000

app.get('/test', (req, res) => {
  console.log('Test route called')
  res.send('Test works!')
})

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`)
    })
  })
  .catch((err) => {
    console.error('DB connection failed:', err)
  })

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client', 'build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}
