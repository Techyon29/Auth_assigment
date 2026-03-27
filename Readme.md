# User Management - Full Stack Application

A simple full-stack application to add and view users, built with React, Node.js, Express, and MongoDB.

## Features

- Submit user data (Name, Email) via a form
- Store data in MongoDB
- Display all submitted users in a table
- Client-side and server-side validation
- Toast notifications for user feedback

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React, Vite, Tailwind CSS, Axios |
| Backend | Node.js, Express.js |
| Database | MongoDB (Mongoose) |

## Prerequisites

- Node.js (v18 or above)
- MongoDB (local or Atlas connection string)

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd Auth_assignment
```

### 2. Setup the Server

```bash
cd Server
npm install
```

Create a `.env` file in the `Server` directory:

```
PORT=4000
MONGO_URL=mongodb://localhost:27017
FRONTEND_URL=http://localhost:5173
```

Start the server:

```bash
npm start
```

### 3. Setup the Client

Open a new terminal:

```bash
cd Client
npm install
```

Create a `.env` file in the `Client` directory:

```
VITE_BACKEND_URL=http://localhost:4000
```

Start the client:

```bash
npm run dev
```

### 4. Open the app

Visit `http://localhost:5173` in your browser.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Health check |
| POST | `/api/user/addUser` | Add a new user |
| GET | `/api/user/getAllUsers` | Get all users |

## Project Structure

```
Auth_assignment/
├── Client/          # React frontend
│   ├── src/
│   │   ├── App.jsx  # Main component
│   │   └── ...
│   └── package.json
├── Server/          # Express backend
│   ├── Server.js    # Entry point
│   ├── src/
│   │   ├── user/    # User routes, controller, model
│   │   └── utils/   # DB connection
│   └── package.json
└── Readme.md
```
