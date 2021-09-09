const express = require("express");
const path = require("path");
const app = express();

app.use(express.urlencoded({ extended: false }));

//configuramos el
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

app.use("/", require("./routes/index.routes"));

module.exports = app;
