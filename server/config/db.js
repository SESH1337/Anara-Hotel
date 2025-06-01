const { MongoClient } = require('mongodb')
const dotenv = require('dotenv')

dotenv.config()

const uri = process.env.MONGO_URI

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  tls: true,
  tlsAllowInvalidCertificates: false, // ან true თუ ისევ გაწუხებს TLS
})

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
