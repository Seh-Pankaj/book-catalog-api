const express = require("express");
const connectDB = require("./db/connection");
const bookRoutes = require("./routes/bookRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/books", bookRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log("Server running at", PORT);
  connectDB();
});
