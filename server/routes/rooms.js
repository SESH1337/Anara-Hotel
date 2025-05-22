const express = require('express')
const router = express.Router()
const connectDB = require('../config/db')

router.get('/', async (req, res) => {
  try {
    const db = await connectDB()
    const rooms = await db.collection('rooms').find({}).toArray()
    console.log('Rooms from DB:', rooms) // debug: რომ ნახო სერვერზე
    res.json(rooms)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server error' })
  }
})

module.exports = router
