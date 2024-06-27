# Dairy-Food-Store-Room-Management-System-3rd-year-

# Description
This project is a web application for managing orders and products. It provides authentication for staff and users, allowing staff to manage products and view orders, while users can place orders and view product details.

## Features

Authentication: Staff and users can sign up and log in to the system.
Staff Features:
    View staff details
    Add, delete, and edit products
    View order list
User Features:
    Place orders
    View product details
    Technologies Used

Frontend: React.js
Backend: Node.js, Express.js
Database: MongoDB
Authentication: JWT (JSON Web Tokens)

# Setup
Clone the repository: git clone https://github.com/your-username/project.git

Install dependencies:
    Frontend: cd frontend && npm install
    Backend: cd backend && npm install

Set up environment variables:
    Create a .env file in the backend directory with the following variables:
    makefile

  PORT=5000
  JWT_SECRET=your_jwt_secret
  
Start the development server:
  Frontend: cd frontend && npm start
  Backend: cd backend && npm start

# Usage

Register a staff or user account.
Log in with your account credentials.
Use the navigation to access different features:
    Staff: Manage products and view orders.
    Users: Place orders and view product details.
