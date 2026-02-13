const dns = require("dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const app = require("./src/app")   // ✅ correct path
const connectDB = require("./src/db/db.js")

connectDB()

app.listen(3000, () => {
    console.log("Server is running")
})
