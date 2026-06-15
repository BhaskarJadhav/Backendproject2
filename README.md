# MongoDB Notes API

A REST API for creating, reading, updating, and deleting notes with Express and MongoDB.

This project builds on an in-memory API by adding persistent storage through Mongoose.

## Features

- Create and list notes
- Update a note description by MongoDB document ID
- Delete a note by MongoDB document ID
- MongoDB persistence through Mongoose
- Environment-based database configuration

## Getting started

```bash
git clone https://github.com/BhaskarJadhav/Backendproject2.git
cd Backendproject2
npm install
```

Create a local `.env` file:

```text
MONGO_URI=mongodb://127.0.0.1:27017/notes
PORT=3000
```

Start the API:

```bash
npm start
```

## Endpoints

| Method | Route | Description |
| --- | --- | --- |
| `POST` | `/notes` | Create a note |
| `GET` | `/notes` | List all notes |
| `PATCH` | `/notes/:id` | Update a note description |
| `DELETE` | `/notes/:id` | Delete a note |

Example request:

```bash
curl -X POST http://localhost:3000/notes \
  -H "Content-Type: application/json" \
  -d '{"title":"Persistent note","description":"Stored in MongoDB"}'
```

## Security

Keep database credentials in environment variables. Do not commit `.env` files or connection strings containing usernames and passwords.
