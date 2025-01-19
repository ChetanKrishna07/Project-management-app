const mongoose = require('mongoose')

const connectDB = async () => {
    console.log("Connecting to mongoDB");
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
    } catch (err) {
        console.log("Error occured: ", err);
        
    }
}

module.exports = connectDB