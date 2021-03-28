require("dotenv").config();
var cors = require("cors");
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var PORT = process.env.PORT || 4000;
// var nodeGeocoder = require("node-geocoder");
// var cron = require("node-cron");

var app = express();
app.use(cors());
app.use(
  bodyParser.json({
    limit: "50mb",
    extended: true,
  })
);

app.use(express.json());


//register and login routes
app.use("/auth", require("./routes/jwtAuth"));

app.use("/dashboard", require("./routes/dashboard"));

app.get("/", (req, res) => {
    console.log("Check")
    res.send("Its working.");
  });



app.listen(PORT, () => {
    console.log("server is running on port "+PORT);
});