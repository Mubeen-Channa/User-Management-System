const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuidv4 } = require("uuid");
const { faker, el } = require("@faker-js/faker");
const mysql = require("mysql2");


const app = express();
const port = 3000;

// middleware to parse incoming form data.
app.use(express.urlencoded({ extended: true }));

// Method Override Middleware
app.use(methodOverride("_method"));

// Set up the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));


// MySql Connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysql123",
  database: "info",
});


// Faker
let getUser = () => {
  return {
    id: faker.string.uuid(), // Generates a random Id
  };
};


// Home Route
app.get("/", (req, res) => {
  res.redirect("/dashboard");
});


// Landing Route (Show Total no of Users)
app.get("/dashboard", (req, res) => {
  try {
    connection.query("select count(*) from users", (err, result) => {
      if (err) {
        throw err;
      } else {
        let count = result[0]["count(*)"];
        res.render("dashboard", { count });
      }
    });
  } catch (error) {
    res.send(`Error: ${error}`);
  }
});


// Show all Users
app.get("/users", (req, res) => {
  try {
    let query = "Select * from users";
    connection.query(query, (err, users) => {
      if (err) {
        throw err;
      } else {
        res.render("users", { users });
      }
    });
  } catch (error) {
    res.send(`Error: ${error}`);
  }
});


// Edit Route
app.get("/users/:id/edit", (req, res) => {
  let u_id = req.params;
  let id = u_id["id"];
  let query = `select * from users where id = '${id}'`;

  connection.query(query, (err, result) => {
    try {
      if (err) {
        throw err;
      } else {
        let user = result[0];
        res.render("edit_form", { user });
      }
    } catch (err) {
      res.send("Error: ", err);
    }
  });
});


// Server
app.listen(port, () => {
  console.log(`Server is Listening at port: ${port}`);
});