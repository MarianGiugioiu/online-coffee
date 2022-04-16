var express = require("express");
//var bodyParser = require("body-parser");
var app = express();

const products = require("./routes/products");
const users = require("./routes/users");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//Port
var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});

//API endpoint for testing the connection
app.get("/api/status", function (req, res) {
    res.status(200).json({ status: "UP" });
});

//Middleware for errors
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

app.use("/api/products", products);

app.use("/api/users", users);
