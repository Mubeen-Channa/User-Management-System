# User Management Dashboard

A simple Node.js and Express.js web application that provides a CRUD interface for managing users stored in a MySQL database. It uses EJS templating for the frontend, Faker.js for generating random IDs, and supports method overrides for handling HTTP verbs like PATCH and DELETE via forms.

<br>

## 🛠️ Features

- 🏠 Dashboard showing total number of users
- 👥 View all users
- ➕ Add new user via form
- ✏️ Edit existing user (with password verification)
- ❌ Delete user (with password verification)
- 🗃️ MySQL database integration
- 🎨 EJS-based dynamic views

<br>

## ⚙️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mubeen-Channa/User-Management-System.git

   ```
2. Install dependencies
   - npm install

3. Set up MySQL database
    - Create a MySQL database named info
    - Run the following SQL to create the users table:

4. Update MySQL credentials

<br>

## 🧰 Dependencies

- Express
- EJS
- MySQL2
- Faker.js
- Method-Override
- UUID

<br>

## 🚀 Run the Application
- node app.js
- Visit: http://localhost:3000