# 📚 Book Management REST API

[![Node.js](https://img.shields.io/badge/Node.js-16%2B-green.svg)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-4.x-blue.svg)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-5.x-brightgreen.svg)](https://www.mongodb.com/)

A robust **RESTful API** built with **Node.js**, **Express.js**, and **MongoDB** for comprehensive book management operations. This project implements **MVC architecture**, comprehensive error handling, data validation, and security best practices.

## 🌟 Key Features

### Core Functionality
- **Complete CRUD Operations**: Create, Read, Update, and Delete book records
- **Data Validation**: Comprehensive input validation using Mongoose schemas

### Technical Features
- **RESTful Architecture**: Follows REST principles with standardized HTTP methods
- **MVC Pattern**: Clean separation of concerns with Models, Views, and Controllers
- **Database Integration**: MongoDB with Mongoose ODM for robust data modeling
- **Environment Configuration**: Secure configuration management with dotenv

## 🏗️ Architecture & Design Patterns

### MVC Architecture
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│     Routes      │───▶│   Controllers   │───▶│     Models      │
│  (API Endpoints)│    │ (Business Logic)│    │ (Data Layer)    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### Project Structure
```
📁 NodeJS-REST-API/
├── 📁 controllers/          # Business logic layer
│   └── 📄 book-controller.js    # Book operations controller
├── 📁 database/             # Database configuration
│   └── 📄 db.js                 # MongoDB connection setup
├── 📁 models/               # Data models & schemas
│   └── 📄 book.js               # Book schema definition
├── 📁 routes/               # API route definitions
│   └── 📄 book-routes.js        # Book-related endpoints
├── 📄 server.js             # Application entry point
├── 📄 package.json          # Project dependencies
├── 📄 package-lock.json     # Dependency lock file
└── 📄 README.md             # Project documentation
```

## 🛠️ Technology Stack

### Backend Framework
- **Node.js** - JavaScript runtime environment
- **Express.js** - Fast, unopinionated web framework

### Database
- **MongoDB** - NoSQL document database
- **Mongoose** - MongoDB object modeling for Node.js

### Core Dependencies
```json
{
  "express": "^4.18.2",
  "mongoose": "^6.10.0",
  "dotenv": "^16.0.3",
  "cors": "^2.8.5",
  "helmet": "^6.0.1",
  "express-rate-limit": "^6.7.0"
}
```

### Development Dependencies
```json
{
  "nodemon": "^2.0.20",
}
```

## 🚀 Quick Start

### Prerequisites
- **Node.js** (version 16 or higher)
- **MongoDB** (local installation or MongoDB Atlas account)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/NodeJS-REST-API.git
   cd NodeJS-REST-API
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**

   Create a `.env` file in the root directory:
   ```env
   # Database Configuration for MongoDB Atlas:
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/bookstore

   # Server Configuration
   PORT=3000
   ```

4. **Database Setup**

   Ensure MongoDB is running locally or configure MongoDB Atlas connection.

5. **Start the Application**

   **Development Mode:**
   ```bash
   npm run dev
   ```

   **Production Mode:**
   ```bash
   npm start
   ```

6. **Verify Installation**

   Navigate to `http://localhost:3000/api/books` to test the API.

### Base URL
```
http://localhost:3000/api
```

### Authentication
Currently, the API operates without authentication.

### Endpoints Overview

| Method   | Endpoint     | Description         | Status Codes       |
| -------- | ------------ | ------------------- | ------------------ |
| `GET`    | `/books`     | Retrieve all books  | 200, 500           |
| `GET`    | `/books/:id` | Retrieve book by ID | 200, 404, 500      |
| `POST`   | `/books`     | Create new book     | 201, 400, 500      |
| `PUT`    | `/books/:id` | Update book by ID   | 200, 400, 404, 500 |
| `DELETE` | `/books/:id` | Delete book by ID   | 200, 404, 500      |



---

## 📬 Contact

Built by [@Upnit-b](https://github.com/Upnit-b) — feel free to reach out via GitHub Issues for any suggestions or bugs.

---


⭐ **Star this repository if you found it helpful!**
