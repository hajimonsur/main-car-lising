require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const carRoutes = require("./routes/carRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const cors = require("cors");


connectDB();
const app = express();

// Enable CORS
app.use(cors({
  origin: "http://localhost:5174" // Allow only your frontend origin
}));
// middleware
app.use(express.json());
// Use routes
app.use("/api/auth", authRoutes);
app.use("/api/cars", carRoutes);
app.use("/api/reviews", reviewRoutes);
// Set up the server to listen on a port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});