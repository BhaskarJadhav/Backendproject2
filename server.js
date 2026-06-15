require("dotenv").config()
const dns = require("dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const app = require('./src/app')
const connectDB = require("./src/db/db.js")

const port = process.env.PORT || 3000

connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server running on port ${port}`)
        })
    })
    .catch((error) => {
        console.error("Failed to start server:", error.message)
        process.exit(1)
    })
