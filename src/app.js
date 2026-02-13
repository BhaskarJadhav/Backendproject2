// ✅ IMPORT express FIRST
const express = require('express')
const noteModel = require("./models/notes.model")

// ✅ THEN create app
const app = express()

// Middleware
app.use(express.json())

// POST /notes => create a note
app.post("/notes", async (req, res) => {
  const data = req.body;
  await noteModel.create({
    title: data.title,
    description: data.description
  })

  res.status(201).json({
    message: "note Created Successfully"
  })
})

// GET /notes => get all notes
app.get("/notes", async (req, res) => {
  const notes = await noteModel.find({})
  res.status(200).json(notes)
})

// Export app
module.exports = app