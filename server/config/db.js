const path = require('path')
const dotenv = require('dotenv') // ეს უნდა ეწეროს სანამ გამოიყენებ
dotenv.config({ path: path.resolve(__dirname, '../.env') })

const { MongoClient } = require('mongodb')

const uri = process.env.MONGO_URI
const client = new MongoClient(uri)

let dbInstance = null

async function connectDB() {
  if (dbInstance) return dbInstance

  try {
    await client.connect()
    console.log('✅ MongoDB Atlas Connected')
    dbInstance = client.db('anara-hotel')
    return dbInstance
  } catch (error) {
    console.error('❌ MongoDB connection error:', error)
    process.exit(1)
  }
}

module.exports = connectDB
