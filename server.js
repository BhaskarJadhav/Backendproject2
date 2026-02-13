const dns = require("dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const app = require('./app')  // ✅ Import app from app.js
const connectDB = require("./src/db/db.js")

connectDB()

app.listen(3000, () => {
    console.log("Server running on port NO 3000")
})