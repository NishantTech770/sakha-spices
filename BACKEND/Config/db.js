const mongoose = require("mongoose")

const main = async () => {
    await mongoose.connect(process.env.MONGO_URL)
}

exports.connectToDB = (req,res) => {
    try{
        main().then(() => {
        console.log("Connected to DB!")
    })
    }catch(err){
        console.log("MongoDB Connection Error!")
    }
}