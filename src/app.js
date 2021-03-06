const express = require("express");
const path = require("path");
const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.resolve(__dirname,'./public')));
//configuramos el
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

app.use("/", require("./routes/index.routes"));
app.use((req,res,next) => {
    res.status(404).render('error')
})
module.exports = app;
