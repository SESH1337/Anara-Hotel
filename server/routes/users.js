const express = require('express')
const router = express.Router()
const connectDB = require('../config/db')

router.get('/', async (req, res) => {
  try {
    const db = await connectDB()
    const users = await db.collection('users').find({}).toArray()
    res.json(users)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server error' })
  }
})

module.exports = router
