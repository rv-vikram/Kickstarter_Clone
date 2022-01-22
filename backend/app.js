const express = require("express");

const app = express();
const errorMiddleware = require("./middlewares/error");
const user = require("./routes/userRoutes");

app.use(express.json());

app.use("", user);

app.use(errorMiddleware);

module.exports = app;
