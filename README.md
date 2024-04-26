# Authorization-Project

## Overview
This project is a full-stack application that handles user authentication and authorization. It includes a client-side built with React and a server-side using Express and MongoDB.

## Features
- User Sign Up
- User Login
- Email Verification

## Technology Stack
- **Frontend:** React, Redux, TailwindCSS, Bootstrap
- **Backend:** Node.js, Express, MongoDB
- **Tools:** Parcel, ESLint, Nodemon

## Getting Started

### Prerequisites
- Node.js
- MongoDB

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repository/Authorization-Project.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```

### Environment Variables
Create a `.env` file in the root directory and add the following:
```
PORT=3000
DB_URI=mongodb://localhost:27017/Auth
```

## Project Structure
- `client/`: Contains all the frontend code.
- `server/`: Contains all the backend code.
- `client/src/components/`: React components.
- `server/src/routes/`: API routes.

## API Endpoints
- POST `/signup`: Registers a new user.
- POST `/login`: Authenticates a user.
- POST `/checkemail`: Checks if the email is already registered.

## License
This project is licensed under the ISC License.