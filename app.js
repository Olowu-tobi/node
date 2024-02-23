// importing Express
const express = require("express");

// import route
const routes = require("./routes/route");

// Starting express
const app = express();

// make express use json
app.use(express.json());

// make express url encoded
app.use(
  express.urlencoded({
    extended: true,
  })
);

// make express usethe route
app.use(routes);

// start the port
app.listen(3000, () => {
  console.log("server is listening to port 3000");
});
