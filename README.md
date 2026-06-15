# MongoDB Notes API

A small REST API for managing notes with Express, MongoDB, and Mongoose.

## Features

- Create a note
- List all notes
- Update a note by document ID
- Delete a note by document ID
- Configure the database through environment variables

## Setup

```bash
git clone https://github.com/BhaskarJadhav/Backendproject2.git
cd Backendproject2
npm install
```

Copy `.env.example` to `.env` and set your values:

```env
MONGO_URI=mongodb://127.0.0.1:27017/notes
PORT=3000
```

Start the server:

```bash
npm start
```

## API

| Method | Endpoint | Purpose |
| --- | --- | --- |
| `POST` | `/notes` | Create a note |
| `GET` | `/notes` | List notes |
| `PATCH` | `/notes/:id` | Update a note description |
| `DELETE` | `/notes/:id` | Delete a note |

Example body:

```json
{
  "title": "Project idea",
  "description": "Build a documented REST API"
}
```

## Built with

`Node.js` `Express` `MongoDB` `Mongoose`
