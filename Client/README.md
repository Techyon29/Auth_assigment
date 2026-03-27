# Client - User Management Frontend

A React frontend for submitting and viewing user data, built with Vite and Tailwind CSS.

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- Axios (HTTP client)
- React Toastify (notifications)

## Features

- Form with Name and Email fields
- Client-side validation (empty fields, email format)
- Displays all submitted users in a table
- Real-time list update after adding a user
- Toast notifications for success/error feedback

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file (refer `.env.example`):
   ```
   VITE_BACKEND_URL=http://localhost:4000
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The app runs on `http://localhost:5173` by default.

## Project Structure

```
Client/
├── src/
│   ├── App.jsx        # Main component with form and user list
│   ├── main.jsx       # React entry point
│   ├── index.css      # Global styles
│   └── assets/        # Static assets
├── index.html
├── vite.config.js
├── .env.example
└── package.json
```
