const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: String,        // ✅ Capital S
    description: String,  // ✅ Capital S
})

const noteModel = mongoose.model("notes", noteSchema)

module.exports = noteModel
// ```

// ---

// ## **Now test with:**

// **POST request:**
// ```
// POST http://localhost:3000/notes
// Body: {
//   "title": "My First Note",
//   "description": "This is a test note"
// }
// ```

// **GET request:**
// ```
// GET http://localhost:3000/notes