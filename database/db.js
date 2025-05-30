const mongoose = require('mongoose')

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('Mongo DB is connected successfully!')
  } catch (error) {
    console.error('Mongo DB Connection Failed', error)
    process.exit(1)
  }
}

module.exports = connectToDB
