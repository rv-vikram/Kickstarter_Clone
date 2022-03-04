const express = require("express");
const cors = require("cors")

const app = express();
const errorMiddleware = require("./middlewares/error");
const user = require("./routes/userRoutes");

app.use(express.json());
app.use(cors());
app.use("", user);

app.use(errorMiddleware);

module.exports = app;
