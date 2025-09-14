const express = require("express");
const connectDB = require("../db/connection");
const cors = require("cors");
const bookRoutes = require("../routes/bookRoutes");
const userRoutes = require("../routes/userRoutes");
const ServerlessHttp = require("serverless-http");

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/api/books", bookRoutes);
app.use("/api/users", userRoutes);

connectDB();

module.exports = app;
module.exports.handler = ServerlessHttp(app);
