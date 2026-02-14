// const mongoose = require ("mongoose")

// async function connectDB()
// {
//     await mongoose.connect("mongodb+srv://firstProject:ABfqmkAtppTrs4Fq@cluster1.chcezwz.mongodb.net/halley")
//     console.log("connected")
// }
// module.exports=connectDB



// //Database is separate from server.

// MongoDB runs independently.

// You connect to it like this:


const mongoose = require("mongoose")   // to comnnect with cliuster and inside clusrtter make the db and connect with thaem

async function connectDB() {
    try {
        await mongoose.connect("mongodb+srv://firstProject:ABfqmkAtppTrs4Fq@cluster1.chcezwz.mongodb.net/halley")
    console.log("connected to DB ")
    } catch (err) {
        console.error(err)
    }
}

module.exports = connectDB
