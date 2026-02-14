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

   // ✅ Print what you're sending to server
  console.log("Note received:", data);

  await noteModel.create({
    title: data.title,
    description: data.description,
   
  })

  res.status(201).json({
    message: "note Created Successfully"
  })
})



// GET /notes => get all notes
app.get("/notes", async (req, res) => {
  const notes = await noteModel.find({
   

    // // const notes = await noteModel.findOne({
    // title: "My First Note"


  })   // [] find returns the the arry of all noted preessent notes in DB
  res.status(200).json({
    message:"notes fetched sucessfully ",
    notes:notes
  })
})



app.delete ("/notes/:id", async (req , res)=>{

  const id =req.params.id
  await noteModel.findOneAndDelete({
    _id:id
  })

  res.status(200).json({
    mmessage:"note deleted Sucessfully "
  })
})



app.patch("/notes/:id", async (req, res) =>{
  const id =req.params.id
  const description= req.body.description

  await noteModel.findOneAndUpdate({_id:id},{description:description})

   res.status(200).json({
  message: "note Updated sucessfully "
})
})



// Export app
module.exports = app