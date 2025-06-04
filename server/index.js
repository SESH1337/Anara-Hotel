require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')
const userRoutes = require('./routes/users')
const roomsRoutes = require('./routes/rooms')

const app = express()

app.use(
  cors({
    origin: 'https://anara-hotel-1.onrender.com',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
)

app.use(express.json())
app.use('/api/rooms', roomsRoutes)
app.use('/api/users', userRoutes)

app.get('/', (_req, res) => res.send('API is running'))

app.get('/test', (_req, res) => res.send('Test works!'))

const PORT = process.env.PORT || 5000
connectDB()
  .then(() =>
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))
  )
  .catch((err) => console.error('DB connection failed:', err))
