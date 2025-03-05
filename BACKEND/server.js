const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
const userRoutes = require("./routes/userRoutes"); // Correctly reference userRoutes

app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected Successfully");
    const PORT = process.env.PORT || 5003; 
    app.listen(PORT, () => {
      console.log(`Running at port ${PORT}`);
    });
  })
  .catch((error) => console.log("Failed to connect:", error));

// Use Routes with Base Path
app.use(userRoutes);
