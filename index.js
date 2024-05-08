require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3000;
const userRoutes = require('./routes/userRoutes');

// This is teh connection part 
mongoose.connect(process.env.MONGODB_URI);

app.use(express.json()); // Parse JSON bodies

// Routes
app.use('/api/users', userRoutes);


const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
