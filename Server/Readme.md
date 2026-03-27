# Server - User Management API

A Node.js + Express backend API with MongoDB for storing and retrieving user data.

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- CORS enabled

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Health check |
| POST | `/api/user/addUser` | Add a new user (requires `name` and `email` in body) |
| GET | `/api/user/getAllUsers` | Fetch all submitted users |

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file (refer `.env.example`):
   ```
   PORT=4000
   MONGO_URL=mongodb://localhost:27017
   FRONTEND_URL=http://localhost:5173
   ```

3. Start the server:
   ```bash
   npm start
   ```

The server runs on `http://localhost:4000` by default.

## Project Structure

```
Server/
├── Server.js              # Entry point - Express app setup
├── src/
│   ├── user/
│   │   ├── Router.js      # User route definitions
│   │   ├── Controller.js  # Route handler logic
│   │   └── Model.js       # Mongoose User schema
│   └── utils/
│       └── dbConnection.js # MongoDB connection utility
├── .env.example
└── package.json
```
