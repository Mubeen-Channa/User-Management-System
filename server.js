const express = require("express");
const path = require("path");
const methodOverride = require("method-override");


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


// Server
app.listen(port, () => {
  console.log(`Server is Listening at port: ${port}`);
});