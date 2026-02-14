const dns = require("dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const app = require('./src/app')  // ✅ Import app from app.js
const connectDB = require("./src/db/db.js")

connectDB()

app.listen(3000, () => {
    // testing the git
    console.log("Server running on port NO 3000")
})